package com.seoul.oda.controller;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seoul.oda.dto.Message;


@RestController
@RequestMapping("/api")
public class RcCarController {

	@RequestMapping("rc")
	public Message cmdGo(@RequestParam(value = "cmd") String cmd) throws IOException {
		
		System.out.println(cmd);
		
		// 예외처리
		//if(cmd == null) {}
		
		String domain = "http://192.168.200.122/?cmd="+cmd;

		try {

			URL u = new URL(domain);

			HttpURLConnection con = (HttpURLConnection) u.openConnection();

			/*URL이 참조하는 원격 개체에 대한 연결을 나타내는 URLConnection 인스턴스를 반환합니다.
			 * 이 URL에 대한 프로토콜 처리기의 URLStreamHandler.openConnection(URL) 메서드를 호출할 때마다 URLConnection의 새 인스턴스가 생성됩니다.
			 * URLConnection 인스턴스는 생성 시 실제 네트워크 연결을 설정하지 않습니다. 이것은 URLConnection.connect()를 호출할 때만 발생합니다.*/
			
			
			System.out.println("응답코드 : " + con.getResponseCode());

			System.out.println("응답메세지 : " + con.getResponseMessage());

		} catch (MalformedURLException e) {

			System.out.println(domain+" is not a URL I understand");

		} catch (IOException e) {

		}

		
		
		/*
		URL url = new URL("http://192.168.219.194/?cmd=GO");
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("GET");
		*/
			
		return Message.success("done");
	}
	
	
}
