import * as TemplateHelpers from '../index';
import { theme } from '@snappmarket/config';

describe('TemplateHelpers', () => {
  describe('hexToRgb', () => {
    it('should return zero as values of rgb because no hex was given', () => {
      expect(TemplateHelpers.hexToRgb('')).toEqual({
        red: 0,
        green: 0,
        blue: 0,
      });
    });
    it('should return rgb of given hex color', () => {
      expect(TemplateHelpers.hexToRgb('#ffffff')).toEqual({
        red: 255,
        green: 255,
        blue: 255,
      });
    });
  });
  describe('defineForegroundColor', () => {
    it('should return dark foreground color because background is a bright color', () => {
      expect(TemplateHelpers.defineForegroundColor('#ffff00')).toEqual('taupe');
    });
    it('should return light foreground color because background is a dark color', () => {
      expect(TemplateHelpers.defineForegroundColor('#ff0000')).toEqual('white');
    });
  });
  describe('makeRgba', () => {
    it('should convert hex color to rgba color suitable for using in css', () => {
      expect(TemplateHelpers.makeRgba(0.5, '#ff00ff')).toEqual(
        'rgba(255, 0, 255, 0.5)',
      );
    });
  });
  describe('decideMeasurement', () => {
    it('should return the given measurement cause it is not a number', () => {
      expect(TemplateHelpers.decideMeasurement('10px')).toEqual('10px');
    });
    it('should multiply given measurement into rem, suitable for css', () => {
      expect(TemplateHelpers.decideMeasurement(5)).toEqual('calc(1rem * 5)');
    });
  });
  describe('makeShadow', () => {
    it('should return inset shadow suitable for css', () => {
      expect(
        TemplateHelpers.makeShadow('10px', 1, '1em', 2, '#000000'),
      ).toEqual('10px calc(1rem * 1) 1em calc(1rem * 2) #000000');
    });
    it('should return inset shadow suitable for css', () => {
      expect(
        TemplateHelpers.makeShadow('10px', 1, '1em', 2, '#ffffff', true),
      ).toEqual('10px calc(1rem * 1) 1em calc(1rem * 2) #ffffff inset');
    });
  });
  describe('viewport', () => {
    it('should return viewport point with px', () => {
      expect(TemplateHelpers.viewport('md')({ theme })).toEqual('768px');
    });
    it('should return viewport point with px by threshold', () => {
      expect(TemplateHelpers.viewport('md', 1)({ theme })).toEqual('767px');
    });
  });
  describe('makeRgbaColor', () => {
    it('should make rgba color from given color', () => {
      expect(TemplateHelpers.makeRgbaColor(0.4, 'white')({ theme })).toEqual(
        'rgba(255, 255, 255, 0.4)',
      );
    });
  });
});
