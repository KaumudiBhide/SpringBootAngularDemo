package com.macarts.basicdemo;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

@RestController
@Tag(name = "Hello Controller", description = "This is Hello Controller")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {

    @GetMapping("/")
    public String version() {
        return InfoMessages.GREETINGS + getVersion();
    }

    @GetMapping("/hello")
    public String hello() {
        return InfoMessages.HELLO;
    }

    @GetMapping("/json")
    public Map<String, String> json() {
        Map<String, String> infoMap = new HashMap<>();
        infoMap.put("name", "BasicDemo");
        infoMap.put("description", "A basic repo with Java, SpringBoot, H2 DB and AngularJS");
        infoMap.put("updated", "07-Jul-2024");
        infoMap.put("message", "Corrected errors");
        return infoMap;
    }

    private String getVersion() {
        Properties versions = new Properties();
        StringBuffer number = new StringBuffer();
        try {
            versions.load(new FileInputStream("version.properties"));
            number.append(versions.getProperty("version", "X"));
            number.append(".");
            number.append(versions.getProperty("majorBuild", "X"));
            number.append(".");
            number.append(versions.getProperty("minorBuild", "X"));
            log.info("Current version is: {}", number);
        }
        catch (IOException e) {
            log.error(ErrorMessages.VERSION_ERROR);
            throw new RuntimeException(e);
        }
        return InfoMessages.VERSION + number;
    }
}