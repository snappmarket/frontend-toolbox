#!/bin/bash

version=1.3.0
set -o errexit -o nounset -o pipefail

info="
   ___ _                  _        __
  / __\ |__   __ _ _ __  (_) ___  / /  ___   __ _
 / /  | '_ \ / _' | '_ \ | |/ _ \/ /  / _ \ / _' |
/ /___| | | | (_| | | | || |  __/ /__| (_) | (_| |
\____/|_| |_|\__,_|_| |_|/ |\___\____/\___/ \__, |
                       |__/                 |___/

  v: $version - https://github.con/sayjeyhi/chanjelog
  An open source hack by @sayjeyhi - https://sayjeyhi.com

"
usage="

flag  |  description
-----------------------------------------------------
-h    |  show help
-r    |  *{string} git repo url e.g: git.com/project.git
-b    |  {string} main branch to pull and push, default is 'master'
-f    |  {string} a file path to set version init with -s search format e.g: 'docker-compose.yml'
-s    |  {string} search pattern in version file e.g: '- DEPLOY_VERSION=[0-9]*\.[0-9]*\.[0-9]*'
-p    |  {string} search replace pattern in version file e.g: '- DEPLOY_VERSION='
-u    |  {string} jira tasks prefix to automaticly convery #[0-9]* to jira links in commit messages e.g: 'https:\/\/jira.site.com\/browse\/SP-'
-g    |  {boolean} to control adding tag on git or not e.g: [1|0]
-v    |  {string} to control version increase type e.g: ['patch'|'minor'|'major'|'prere'|'build']
-c    |  {boolean} to control update changeslog.md file e.g: [1|0]


You should have CI_USER and CI_ACCESS_TOKEN variables to allow ci to update your git.
----

"


# Helper vairables
NAT='0|[1-9][0-9]*'
ALPHANUM='[0-9]*[A-Za-z-][0-9A-Za-z-]*'
IDENT="$NAT|$ALPHANUM"
FIELD='[0-9A-Za-z-]+'
dir="$(pwd)"
NOW=$(date +'%Y-%m-%d %H:%M:%S')
ADD_GIT_TAG=1
GENERATE_CHANGES_LOG=1
VERSION_BUMP_TYPE="patch"
SEMVER_REGEX="\
^[vV]?\
($NAT)\\.($NAT)\\.($NAT)\
(\\-(${IDENT})(\\.(${IDENT}))*)?\
(\\+${FIELD}(\\.${FIELD})*)?$"

# validate supplied version
function validate-version {
  local version=$1
  if [[ "$version" =~ $SEMVER_REGEX ]]; then
    # if a second argument is passed, store the result in var named by $2
    if [ "$#" -eq "2" ]; then
      local major=${BASH_REMATCH[1]}
      local minor=${BASH_REMATCH[2]}
      local patch=${BASH_REMATCH[3]}
      local prere=${BASH_REMATCH[4]}
      local build=${BASH_REMATCH[8]}
      eval "$2=(\"$major\" \"$minor\" \"$patch\" \"$prere\" \"$build\")"
    else
      echo "$version"
    fi
  else
    echo "version $version does not match the semver scheme 'X.Y.Z(-PRERELEASE)(+BUILD)'. See help for more information."
  fi
}

# generate new version
function generateVersion {
  local new; local version; local sub_version; local command;

  case $# in
    2) case $1 in
        major|minor|patch|release) command=$1; version=$2;;
        *) usage-help;;
       esac ;;
    3) case $1 in
        prerel|build) command=$1; sub_version=$2 version=$3 ;;
        *) usage-help;;
       esac ;;
    *) usage-help;;
  esac

  validate-version "$version" parts
  # shellcheck disable=SC2154
  local major="${parts[0]}"
  local minor="${parts[1]}"
  local patch="${parts[2]}"
  local prere="${parts[3]}"
  local build="${parts[4]}"

  case "$command" in
    major) new="$((major + 1)).0.0";;
    minor) new="${major}.$((minor + 1)).0";;
    patch) new="${major}.${minor}.$((patch + 1))";;
    release) new="${major}.${minor}.${patch}";;
    prerel) new=$(validate-version "${major}.${minor}.${patch}-${sub_version}");;
    build) new=$(validate-version "${major}.${minor}.${patch}${prere}+${sub_version}");;
    *) echo "Invalid param";;
  esac

  echo "$new"
  exit 0
}

if [ "$1" == "-h" ]; then
  echo "$info $usage"
  exit 0
fi


while getopts :f:u:g:v:c:r:s:p:b: flag
do
  # shellcheck disable=SC2220
  case "${flag}" in
    f) VERSION_CHANGE_FILE=${OPTARG};;
    u) URL_PREFIX=${OPTARG};;
    g) ADD_GIT_TAG=${OPTARG};;
    v) VERSION_BUMP_TYPE=${OPTARG};;
    c) GENERATE_CHANGES_LOG=${OPTARG};;
    r) GIT_REPO=${OPTARG};;
    b) MAIN_BRANCH=${OPTARG};;
    s) FILE_SEARCH_PATTERN=${OPTARG};;
    p) FILE_REPLACE_PATTERN=${OPTARG};;
    d) FILE_REPLACE_PATTERN=${OPTARG};;
    :) printf "missing argument for -%s\n" "$OPTARG" >&2
     echo "$usage" >&2
     exit 1
     ;;
    \?) printf "illegal option: -%s\n" "$OPTARG" >&2
     echo "$usage" >&2
     exit 1
     ;;
  esac
done


echo "$info"

# update current local git
echo "✔ Checking if master is master or main! (github patch)"
exists="git show-ref refs/heads/$MAIN_BRANCH"
master="main"
if [ -n "$exists" ]; then
  master="$MAIN_BRANCH"
fi

echo "✔ Pulling changes from repo"
git pull origin "$master" --rebase > /dev/null 2>&1

echo "✔ Calculating lastest version and new version"
CURRENT_GIT_VERSION=$(git tag| sort -V | tail -n1 || '1.0.0')
echo "  🔥 Cuurent version is: $CURRENT_GIT_VERSION"

NEW_GIT_VERSION=$(generateVersion "$VERSION_BUMP_TYPE" "$CURRENT_GIT_VERSION")
echo "  🔥 New version will be: $CURRENT_GIT_VERSION"

NEW_TAG_CHANGES=$(git log --no-merges --pretty=format:"- %s (**%cn** - %cr)" HEAD..."$CURRENT_GIT_VERSION")


# Make changes log file
if [ "$GENERATE_CHANGES_LOG" != "0" ]; then
  echo "✔ Generating changeslog file"
  CHANGES_LOG_FILE="$dir/changeslog.md"
  CHANGES_LOG_TEMP_FILE="$dir/_changeslog.md"
  CHANGES_LOG_CONTENT=""

  if [ -e "$CHANGES_LOG_FILE" ]
  then
    CHANGES_LOG_CONTENT=$(cat "$CHANGES_LOG_FILE")
  fi

  echo "## $NEW_GIT_VERSION" > "$CHANGES_LOG_TEMP_FILE"
  {
    echo "$NOW"
    echo ""
    echo "$NEW_TAG_CHANGES"
    echo ""
    echo ""
    echo "$CHANGES_LOG_CONTENT"
  }  >> "$CHANGES_LOG_TEMP_FILE"

  echo "✔ Writing changeslog file"
  mv "$CHANGES_LOG_TEMP_FILE" "$CHANGES_LOG_FILE"

  # Find task ids and link to them
  if [ "${URL_PREFIX+1}" ];then
    sed -i -e "s/#[0-9]/$URL_PREFIX/" "$CHANGES_LOG_FILE"
  fi

  # add file to git
  git add changeslog.md
fi

# Update docker env to use version in runtime
if [ "${VERSION_CHANGE_FILE+1}" ];then
  VERSION_FILE="$dir/$VERSION_CHANGE_FILE"
  echo "✔ Updating version $NEW_GIT_VERSION on $VERSION_CHANGE_FILE"
  sed -i -e "s/$FILE_SEARCH_PATTERN/$FILE_REPLACE_PATTERN$NEW_GIT_VERSION/g" "$VERSION_FILE"
fi

# Update remote branch
declare -a commitParams
commitParams=(changeslog.md )
if [ "${VERSION_CHANGE_FILE+1}" ];then
  # shellcheck disable=SC2206
  commitParams+=($VERSION_CHANGE_FILE)
fi
commitParams+=(-m "🎉 Release v$NEW_GIT_VERSION [skip ci]")

echo "✔ Committing changes..."
git commit "${commitParams[@]}" > /dev/null 2>&1


echo "✔ Pushing changes to git repo..."
git push --set-upstream origin develop -o ci.skip --follow-tags


# add release tag and note
if [ "${ADD_GIT_TAG+1}" ] && [ "$ADD_GIT_TAG" != "0" ]; then
  echo "✔ Adding tag $NEW_GIT_VERSION to git..."
  git tag -a "$NEW_GIT_VERSION" -m "$NEW_TAG_CHANGES"
  git push --set-upstream origin "$MAIN_BRANCH" --tags -o ci.skip > /dev/null 2>&1
fi

# Show message of push
echo "🚀 Version $NEW_GIT_VERSION pushed successfully"

