<p align="center">
  <img src="https://github.com/adalborgo/UnoBlockly/blob/beta4/images/appIcon.png" alt="logo" width="8%"/>
</p>

<h1 align="center">UnoBlockly</h1>

UnoBlockly はGoogle社のBlocklyをもとにしたビジュアルプログラミング環境です。 Arduino UNO、Arduino Nano等のAtmega328マイコンを搭載したArduinoボードに対応しています。

本ソフトウェアは、何よりも初心者だけでなくArduinoを教えている先生方にも役立てていただけます。さらに、生成されたコードを活用して従来の言語でのプログラミングへの移行が容易になります。

<p align="center"><img src="https://github.com/adalborgo/UnoBlockly/blob/beta4/images/example-block1.png" alt="Block" width="80%"/></p>

相互に接続するビジュアルブロックを使用して、Arduinoコードを自動的に生成します。コードは便利なプレビューウィンドウで表示したり、グラフィックモードからテキストモードに切り替えて直接編集したりできます。

Arduinoのコードは標準的な「ino」形式で編集、保存できますが、テキストモードでの変更内容はブロックモードに戻すと失われます。
UnoBlocklyはUSBポートを介してArduinoボードと直接接続できます。コンパイルとボードへの書き込みが可能です。

<p align="center"><img src="https://github.com/adalborgo/UnoBlockly/blob/beta4/images/example-code1.png" alt="Code" width="80%"/></p>

シリアルモニターも搭載、データは「csv」形式で保存できます。

<p align="center"><img src="https://github.com/adalborgo/UnoBlockly/blob/beta4/images/serial_monitor.png" alt="Code" width="66%"/></p>

**プロジェクト**
UnoBlocklyのオリジナルはAntonio Dal Borgo氏によるプロジェクトです。
https://github.com/adalborgo/unoblockly

**インストール**
UnoBlocklyはWindowsアプリケーションです:
- インストーラ: ([UnoBlocklySetup.exe](https://meuse-robotics.com/unoblockly/UnoBlocklySetup.exe))
- オリジナル版との違い：●Arduinoカテゴリに「HIGH/LOW」ブロックを追加　●論理カテゴリforループで減算（デクリメント）に対応

**Examples**

For immediate use and educational purposes, some sample sketches are available.

**Generic examples** ([examples.zip](https://www.dibis.it/j4/images/unoblockly/examples/en/examples.zip))
1. Blink the LED on the board (blink.ubk)
2. Blink a LED connected to digital pin 4 (blink-pin4.ubk)
3. Repeat a two-tone sound 5 times (sound\_two-tone.ubk)
4. Play a short melody using Melody notation (melody.ubk)

**Examples for the Grove Beginner Kit** ([examples-sbk.zip](https://www.dibis.it/j4/images/unoblockly/examples/en/examples-sbk.zip))
1. Blink the red LED (sbk-blink.ubk)
2. Generate a variable sound (sbk-variable\_sound.ubk)
3. By pressing the button, the LED turns on and a two-tone sound is generated (sbk-button-led-buzzer.ubk)
4. Clear the display (sbk-cleardisplay.ubk)
5. Fill the display with the &#39;X&#39; character (sbk-display\_fill.ubk)
6. Shows the rotation angle of the potentiometer on the display (sbk-encoder-display.ubk)
7. Shows the temperature, humidity and pressure data on the display (sbk-meteo.ubk)
8. Shows the acceleration on the display (sbk-acceleration.ubk)
9. Indicates the light intensity of the environment (sbk-light\_intensity.ubk)
10. Indicates the ambient noise (sbk-microphone.ubk)

**Makeblock mBot examples** ([examples-mBot.zip](https://www.dibis.it/j4/images/unoblockly/examples/en/examples-mBot.zip))
1. Generate a sequence of sounds from 300 to 1800 Hz (mBot-sound300-1800.ubk)
2. Measure the distance to an object via the ultrasonic sensor and send the data to the serial port (mBot-distance.ubk)
3. Generates sounds with a frequency that varies according to the distance measured by the ultrasonic sensor (mBot-Theremin.ubk)
4. Turn on RGB LEDs with different colors (mBot-RGB.ubk)
5. By pressing the button, the LEDs emit red light otherwise green light (mBot-button.ubk)
6. Indicates the light intensity of the environment (mBot-light\_intensity.ubk)

**Examples for OttoDIY** ([examples-ottodiy.zip](https://www.dibis.it/j4/images/unoblockly/examples/en/examples-ottodiy.zip))
1. Checking the position of legs and feet (ottodiy-check.ubk)
2. Leg and foot calibration (ottodiy-calibrate.ubk)
3. Ottodiy starts dancing if you put your hand at a distance of less than 20 cm (ottodiy-distance\_dance.ubk)
4. Various movements (ottodiy-dance1.ubk)
5. Various movements (ottodiy-dance2.ubk)
6. Various movements (ottodiy-dance3.ubk)
7. If Ottodiy encounters an obstacle at a distance of not less than 10 cm it rotates to the left, if the obstacle is too close it stops (ottodiy-avoid\_obstacle.ubk).

**Acknowledgments**

UnoBlockly development was only possible thanks to these software tools:

- [Blockly](https://developers.google.com/blockly)
- [OttoBlockly](https://github.com/OttoDIY/blockly)
- [Electron](https://www.electronjs.org/)
- [Node.js](https://nodejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [ACE](https://ace.c9.io/)
- [Fork Awesome](https://forkaweso.me/)
- [JQuery](https://jquery.com/)
- [Serialport](https://serialport.io/)
- [arduino-cli](https://github.com/arduino/arduino-cli)
- [ArduinoAVR](https://github.com/arduino/ArduinoCore-avr)

and many others.
