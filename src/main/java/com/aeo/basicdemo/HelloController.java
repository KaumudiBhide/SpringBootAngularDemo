package com.aeo.basicdemo;

import com.fasterxml.jackson.databind.util.JSONPObject;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import netscape.javascript.JSObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

@RestController
@Tag(name = "Hello Controller", description = "This is Hello Controller")
@Slf4j
public class HelloController {

    @GetMapping("/")
    public String version() {
        return InfoMessages.GREETINGS + getVersion();
    }

    @GetMapping("/hello")
    public String hello() {
        return InfoMessages.HELLO;
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