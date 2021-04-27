package com.seoul.oda.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String index() {
		return "view/index.html";
	}
	
	@GetMapping("/login")
	public String loginPage() {
		return "main/login.html";
	}

	@GetMapping("/join")
	public String joinPage() {
		return "main/join.html";
	}
	
	
}

