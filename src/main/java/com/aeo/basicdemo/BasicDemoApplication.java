package com.aeo.basicdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class BasicDemoApplication {

	@Autowired
	Environment environment;

	public static void main(String[] args) {
		SpringApplication.run(BasicDemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner releaseNotes() {
		return args -> {
			String serverStarted = "Server started at localhost:" + environment.getProperty("server.port");
			LogHelper.printPrettyLog(serverStarted);
		};
	}
}
