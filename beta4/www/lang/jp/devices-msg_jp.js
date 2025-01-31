/**
 * @package: UnoBlockly
 * @file devices-msg_en.js
 * @version 0.1 (18-01-2022)
 * @description Generic devices messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

//--- Devices ---//
Blockly.Msg.CAT_DEVICES = "部品";//"Devices";

Blockly.Msg.Devices_Led = "LED";
Blockly.Msg.Devices_Led_tooltip = "LEDをON/OFFします。";//"Turns the LED on / off";

Blockly.Msg.Devices_Button = "ボタン";//"Button";
Blockly.Msg.Devices_Button_tooltip = "ボタンの状態を調べます。";//"Detect button status";

Blockly.Msg.Devices_UltrasonicDistance = "距離（cm）";//"Distance (cm)";
Blockly.Msg.Devices_UltrasonicDistance_trigger = "トリガーピン";//"Trigger pin";
Blockly.Msg.Devices_UltrasonicDistance_echo = "エコーピン";//"Echo pin";
Blockly.Msg.Devices_UltrasonicDistance_tooltip = "障害物との距離を測ります（cm）";//"Get the distance of an obstacle (cm)";

Blockly.Msg.Devices_Potenziometer = "ポテンショメータ |";//"Potenziometer  |"

Blockly.Msg.Devices_Servo = "サーボ";//"Servo"

// Motors
Blockly.Msg.devices_l298n = "モーターコントローラ（L298N）";//"Motor controller (L298N)";
Blockly.Msg.devices_l298n_IN1 = "IN1";
Blockly.Msg.devices_l298n_IN2 = "IN2";
Blockly.Msg.devices_l298n_IN3 = "IN3";
Blockly.Msg.devices_l298n_IN4 = "IN4";
Blockly.Msg.devices_l298n_EN1 = "EN1";
Blockly.Msg.devices_l298n_EN2 = "EN2";
Blockly.Msg.devices_l298n_tooltip = "L298N（2モーター）のピンを設定します。";//"Set the pins of the L298N controller (2 motors)";
Blockly.Msg.devices_motors = "モーター ";//"Motors  ";
Blockly.Msg.devices_motors_tooltip = "モーターを駆動します。";//"Drive motors";
Blockly.Msg.devices_motors_speed = "速度（0～255）";//"Speed (from 0 to 255)";
Blockly.Msg.devices_motors_dir = "方向";//"Direction";
