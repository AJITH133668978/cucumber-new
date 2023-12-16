package com.facebook;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import reusablecodes.Reusablecode;

public class Hooks  {
Reusablecode r= Reusablecode.getInstance();

	@Before
	public void launch(Scenario scenario ) {
		r.launch();
	final byte[]  screenshotAs = ((TakesScreenshot)r.Driver).getScreenshotAs(OutputType.BYTES);
	scenario.embed(screenshotAs, "image/png");
	}
	@After
	public void end(Scenario Scenario) {
		final byte[]  screenshotAs1 = ((TakesScreenshot)r.Driver).getScreenshotAs(OutputType.BYTES);
		Scenario.embed(screenshotAs1, "image/png");
		r.quit();
	}

}
