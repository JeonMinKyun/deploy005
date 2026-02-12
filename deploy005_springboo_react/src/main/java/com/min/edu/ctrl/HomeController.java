package com.min.edu.ctrl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://053c-1-11-163-250.ngrok-free.app")
public class HomeController {

	@GetMapping
	public String home() {
		return "안녕하세요 서버입니다";
	}
}
