/**
 * @package: UnoBlockly
 * @file themes.js
 * @version 0.1 (15-11-2021)
 * @description Added some blocks to Blockly.Themes.Classic
 * @see
	https://developers.google.com/blockly/guides/configure/web/themes
	https://www.w3schools.com/colors/colors_hsl.asp
	https://www.w3schools.com/colors/colors_picker.asp
	https://en.wikipedia.org/wiki/Hue
	Blockly.Themes = {}; // blockly_compressed.js
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

Blockly.Themes.Custom = {};

Blockly.Themes.Custom.defaultBlockStyles = {
	colour_blocks: {
		colourPrimary: "20"
	},
	array_blocks: {
		colourPrimary: "260"
	},
	list_blocks: {
		colourPrimary: "260"
	},
	logic_blocks: {
		colourPrimary: "210"
	},
	loop_blocks: {
		colourPrimary: "120"
	},
	math_blocks: {
		colourPrimary: "230"
	},
	procedure_blocks: {
		colourPrimary: "290"
	},
	text_blocks: {
		colourPrimary: "160"
	},
	variable_blocks: {
		colourPrimary: "330"
	},
	variable_dynamic_blocks: {
		colourPrimary: "310"
	},

	// Added
	time_blocks: {
		colourPrimary: "#228B22"
	},
	serial_blocks: {
		colourPrimary: "#4169E1"
	},
	sound_blocks: {
		colourPrimary: "#A0522D"
	},
	devices_blocks: {
		colourPrimary: "#1E93BF"
	},
	arduino_blocks: {
		colourPrimary: "180"
	},
	mBot_blocks: {
		colourPrimary: "#2a93e8"
	},
	seeedbeg_blocks: {
		colourPrimary: "#6ab856"
	},
	otto_blocks: {
		colourPrimary: "#32d900"
	}
};

Blockly.Themes.Custom.categoryStyles = {
	colour_category: {
		colour: "20"
	},
	array_category: {
		colour: "260"
	},
	list_category: {
		colour: "260"
	},
	logic_category: {
		colour: "210"
	},
	loop_category: {
		colour: "120"
	},
	math_category: {
		colour: "230"
	},
	procedure_category: {
		colour: "290"
	},
	text_category: {
		colour: "160"
	},
	variable_category: {
		colour: "330"
	},
	variable_dynamic_category: {
		colour: "310"
	},

	// Added
	time_category: {
		colour: "#228B22"
	},
	serial_category: {
		colour: "#4169E1"
	},
	sound_category: {
		colour: "#A0522D"
	},
	devices_category: {
		colour: "#1E93BF"
	},
	arduino_category: {
		colour: "180"
	},
	mBot_category: {
		colour: "#2a93e8"
	},
	seeedbeg_category: {
		colour: "#6ab856"
	},
	otto_category: {
		colour: "#32d900"
	}
};

Blockly.Themes.Custom = new Blockly.Theme("custom", Blockly.Themes.Custom.defaultBlockStyles, Blockly.Themes.Custom.categoryStyles);
