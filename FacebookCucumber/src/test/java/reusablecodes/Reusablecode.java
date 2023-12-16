package reusablecodes;
import java.io.File;
import java.awt.AWTException;
import java.awt.Robot;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Reusablecode {
	public static WebDriver Driver;
	public static Actions a;
	public static TakesScreenshot ts;
	public static Select s;
	public static JavascriptExecutor js;
	public static WebDriverWait w;
	public static Reusablecode r=null;
	
	public static Reusablecode getInstance() {
		if(r==null) {
			r=new Reusablecode();
		}
		return r;
		
	}
	private Reusablecode() {
		
	}
	
	
	public void launch() {
		WebDriverManager.edgedriver().setup();
		Driver=new EdgeDriver();
		Driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	public void maximize() {
		Driver.manage().window().maximize();
	}
	public void quit() {
		Driver.quit();
	}
	
	public void input(WebElement e,String value) {
		e.sendKeys(value,Keys.ENTER);
		
	}
	public void button(WebElement e) {
		e.click();
		
	}
	public void gettext(WebElement e) {
		e.getText();
	}
		
	
	public void inputact(WebElement e,String value) {
		a= new Actions(Driver);
		a.sendKeys(e, value,Keys.ENTER);
	}
	public void buttonact(WebElement e,int i) {
		a.click(e);
		
	}
	public void contextclick(WebElement e) {
		a.click(e);
	}
	public void doubleclick(WebElement e) {
		a.click(e);
	}
	public void movetoelement(WebElement e) {
		a.moveToElement(e);
	}
	public void draganddrop(WebElement e,WebElement e1) {
		a.dragAndDrop(e, e1);
	}
	public void selectbyvalue(WebElement e,String value) {
		 s=new Select(e);
		 s.selectByValue(value);
		}
	public void selectbyindex(WebElement e,int i) {
		s=new Select(e);
		s.selectByIndex(i);
	}
	public void selectbyvisibletext(WebElement e,String text) {
		s=new Select(e);
		s.selectByVisibleText(text);
	}
	
		
	public void alert() {
		Driver.switchTo().alert();
		
	}
	public void confirmalertacc() {
		Alert a = Driver.switchTo().alert();
		a.accept();
	}
	public void confirmalertdis() {
		Alert a = Driver.switchTo().alert();
		a.dismiss();
	}
	public void promptalertacc(String value) {
			Alert a = Driver.switchTo().alert();
			a.sendKeys(value);
			a.accept();
		
	}
		
	public void promptalertdis(String value){
		Alert a = Driver.switchTo().alert();
		a.sendKeys(value);
		a.dismiss();
	}
	public void framesbyint(int i) {
		 Driver.switchTo().frame(i);
	}
	public void framesbyvalue(String id) {
		Driver.switchTo().frame(id);
	}
	public void framesbywebelement(WebElement e) {
		Driver.switchTo().frame(e);
	}
	public void parentframe() {
		Driver.switchTo().parentFrame();
	}
	public void mainframe() {
		Driver.switchTo().defaultContent();
	}
	public void inputjs(WebElement e,String string) {
		js=(JavascriptExecutor)Driver;
		js.executeScript("arguments[0].SetAttribute('value','string')",e);
	}
	public void scroll(WebElement e) {
		js.executeScript("arguments[0].ScrollIntoView(true)", e);
		
	}
	public void buttonclickjs(WebElement e) {
		js.executeScript("arguments[0].click()", e);
	}
	
	public void windowhandlechild(int i) {
		Set<String> window = Driver.getWindowHandles();
		List<String>Li=new ArrayList<>(window);
		Driver.switchTo().window(Li.get(i));
		
	}
	
	public File getscreenshot() {
		 ts =(TakesScreenshot)Driver;
	File screenshot= ts.getScreenshotAs(OutputType.FILE);
           return screenshot ;
	}
	
	
	
	
	
	
	
	
	

}
