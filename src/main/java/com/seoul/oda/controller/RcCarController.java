package com.seoul.oda.controller;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoul.oda.dto.Message;


@RestController
@RequestMapping("/api")
public class RcCarController {

	@RequestMapping("/go")
	public Message cmdGo() throws IOException {
		System.out.println("앞으로갑니다");
		
		
		String domain = "http://192.168.219.194/?cmd=GO";

		try {

			URL u = new URL(domain);

			HttpURLConnection con = (HttpURLConnection) u.openConnection();

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
