package com.macarts.basicdemo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(classes = HelloController.class)
public class HelloControllerTest {

    @Autowired
    HelloController controller;

    @Autowired
    Environment environment;

    static {
        System.setProperty("version", "0");
        System.setProperty("majorBuild", "0");
        System.setProperty("minorBuild", "1");
    }

    @BeforeEach
    public void healthCheck() {
        assertNotNull(controller);
        assertNotNull(environment);
    }

    @Test
    public void testGet() {
        String expectedVersion = environment.getProperty("version");
        String actualVersion = controller.version();
        assert expectedVersion != null;

        String expectedMajorBuild = environment.getProperty("majorBuild");
        assert expectedMajorBuild != null;

        String expectedMinorBuild = environment.getProperty("minorBuild");
        assert expectedMinorBuild != null;

        String expectedVersionMessage
                = expectedVersion + "." + expectedMajorBuild + "." + expectedMinorBuild;
        Assertions.assertTrue(actualVersion.contains(expectedVersionMessage));
    }

    @Test
    public void testHello() {
        String actualHello = controller.hello();
        Assertions.assertEquals(InfoMessages.HELLO, actualHello);
    }
}
