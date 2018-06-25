import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Alert, Table } from 'reactstrap';

class SyllabusInstance extends React.Component{
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		ReactDOM.render(<SyllabusComment />,document.getElementById('container'));
	}
	render(){
		return(
		  <div>
		  <br />
			<Alert color="info">
		    <Button color="link" onClick={this.handleClick}>Lesson 1: Arduino Introduction</Button>
			</Alert>
      <Alert color="info">
        <Button color="link" onClick={this.handleClick}>Lesson 2: Arduino Devolop Software</Button>
      </Alert>
		  </div>
		);
	}
}

class SyllabusComment extends React.Component{
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		ReactDOM.render(<SyllabusInstance />,document.getElementById('container'));
	}
	render(){
		return(
		  <div>
		  	<br />
		  	<Alert color="light">
		  	<Button color="link" onClick={this.handleClick}>Back</Button>
		  	</Alert>
			<br />
			<Alert color="success">
		        <h4 className="alert-heading">Arduino Introduction</h4>
		        <p>
這是個智慧型手機流行的年代，大家一定都聽過Android，但對於Anduinot卻充滿了陌生感。和Android相同的地方在於，兩者皆是使用開放原始碼的軟硬體平台。不同的是，Arduino提供了簡單好用的I/O介面，並具可使用類似於Java、C語言等高階語言的開發環境。

Arduino是一種開放授權的互動環境開發技術，互動裝置其實無所不在，像是冷氣的恆溫裝置，便是使用感測器偵測環境溫度，進行室內溫度的自動調節；還有汽車使用的倒車雷達，過於靠近物體便會發出聲音警告駕駛者。這些裝置為生活增加不少安全及便利，互動能帶給使用者驚喜，有時會以藝術品的方式呈現在生活當中。

以往要處理相關的電子設備時，需要透過工程師，逐一由單一小元件拼湊出整個電路。大多數的設計工具都是為了工程師設計，除了電路外還需要廣泛的知識，才有辦法完成電路。還好微處理器有了長足的進步，除了在使用上變得更為容易，價格上的減少更降低了學習的門檻。
		        <hr />
Arduino的特色: 
開放源碼(open-source)。不僅軟體是開放源碼，硬體也是開放的。軟體的開發環境可在網上免費下載，而Arduino 的電路設計圖也可從官方網站自行下載，依據自身之需求進行修，但須要符合創用CC授權條款(創用CC授權條款)。

開發簡單，參考資料多。在以往的硬體環境中，要開發微控制器的程式，開發者需要具備電子、電機及相關科系的背景，一般人需花費大量時間能有機會進入這個開發環境中。Arduino 學習門檻較為簡單，不需要電子電機相關科系的背景，也可以很容易學會Arduino相關互動裝置的開發。由於 Arduino 以公開共享為基礎，多數人都樂於分享自己的的創品，網路上能找的創作案子非常豐富。以此會基礎，有時只需要參考分享者的作品，依據自身的需求行調整，就可以在短時間內完成自己的創作。
		        <hr />
Arduino具備哪些東西: 
主要可區分為三大類，分別是Arduino硬體、Arduino軟體及Arduino擴充原件。
硬體部分可購買現成的版子或是依據網路下載的電路途自行組裝，初學者建議購買現成的，根據Arduino官方網站所寫，台灣地區具有官方合法授權的代理商為藝科資訊 Aroboto Studio、PlayRobot 飆機器人/普特企業有限公司、iCshop (台灣)電子零件，電子材料，當然，還有別的商家，到網路上搜尋一下可找到不少，拍賣網站上也有，甚至也可以到國外網站去買。目前官方網站提供了許多不同的版子供開發者購買。
				<hr />
Arduino硬體介紹：
<img src="./arduino_uno.png"></img>
<TableInstance />
				<hr />
硬體功能說明：
數位 I/O 接腳:
　14 支數位 I/O 接腳 可以當作 input 使用，也可以當作 output 使用，使用方法是透過 pinMode(), digitalWrite(), anddigitalRead() 這幾個函式。這 14 支數位 I/O 接腳，其中幾支腳有特殊的功能:

<TableInstance2 />
		        </p>
		        <p className="mb-0">
		        	<hr />
		          Note: <a href="http://newsletter.ascc.sinica.edu.tw/news/read_news.php?nid=2782">source link</a>
		        </p>
		      </Alert>
		  </div>
		);
	}
}

class TableInstance extends React.Component {
  render() {
    return (
      <Table striped>
        <tbody>
          <tr>
            <td>微控制器</td>
            <td>ATMEGA328</td>
          </tr>
          <tr>
            <td>工作電壓</td>
            <td>5V</td>
          </tr>
          <tr>
            <td>輸入電壓（推薦）</td>
            <td>7-12V</td>
          </tr>
          <tr>
            <td>輸入電壓（限制）</td>
            <td>6-20V</td>
          </tr>
          <tr>
            <td>數字I / O接腳</td>
            <td>14（6個提供PWM輸出）</td>
          </tr>
          <tr>
            <td>模擬輸入接腳</td>
            <td>6支</td>
          </tr>
          <tr>
            <td>EEPROM</td>
            <td>1 KB（ATMEGA328）</td>
          </tr>
          <tr>
            <td>震盪速度</td>
            <td>16 MHz</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
class TableInstance2 extends React.Component {
  render() {
    return (
      <Table striped>
        <tbody>
          <tr>
            <td>Serial 通訊</td>
            <td>0(RX) 和 1 (TX) 這兩支腳。用來接收(RX)與傳輸(TX) TTL 訊號的序列資料。這兩支腳也連接到 USB Converter 晶片中。</td>
          </tr>
          <tr>
            <td>外部中斷</td>
            <td>2 和 3 這兩支腳。這兩支腳可以利用外部事件觸發中斷。詳細內容請參考 attachInterrupt() 函式。</td>
          </tr>
          <tr>
            <td>PWM</td>
            <td>3, 5, 6, 9, 10 和 11 共六支腳。透過 analogWrite() 函式可以提供 8-bit 的 PWM 輸出。</td>
          </tr>
          <tr>
            <td>SPI</td>
            <td>10 (SS), 11 (MOSI), 12 (MISO) 和 13 (SCK) 這四支腳。這四支腳搭配 SPI Library 可提供 SPI 序列通訊。</td>
          </tr>
          <tr>
            <td>LED</td>
            <td>13這支腳內建一顆 LED，當 pin 腳為 HIGH 時，LED 打開，當 pin 腳為 LOW 時，LED 關閉。</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default SyllabusInstance;