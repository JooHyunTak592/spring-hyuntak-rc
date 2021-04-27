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
	
	@GetMapping("/menu1")
	public String loginPage() {
		return "view/menu1.html";
	}

	@GetMapping("/join")
	public String joinPage() {
		return "main/join.html";
	}
	
	
}

