package com.facebook;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Public\\FacebookCucumber\\src\\test\\resources\\facebook.feature",
            glue="com.facebook",
            dryRun=false,
            plugin= {"html:target","json:target/report.json"})
public class TestRunner {

}
