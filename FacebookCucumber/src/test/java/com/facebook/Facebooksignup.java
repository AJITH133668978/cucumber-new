package com.facebook;

import java.io.File;
import reusablecodes.*;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;



import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.github.dockerjava.api.model.Driver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

import io.github.bonigarcia.wdm.WebDriverManager;
import locators.objectrepository.Alllocators;

public class Facebooksignup {
	
	Reusablecode x=Reusablecode.getInstance();
	
	
	Alllocators al=new Alllocators();
	
	
@Given("launch the browser with url {string}")
public void launch_the_browser_with_url(String url) throws Exception {
	
	

	    x.Driver.get(url);
	    List<WebElement> Elements = x.Driver.findElements(By.tagName("link"));
	    Iterator<WebElement> iterator = Elements.iterator();
	    while(iterator.hasNext()) {
	    	WebElement next = iterator.next();
	    	String attribute = next.getAttribute("href");
	    	if(attribute==null||attribute.isEmpty()) {
	    		System.out.println("empty link:"+attribute);
	    	}else if (!attribute.startsWith("https://www.facebook.com/")) {
	    		System.out.println("not related to our domain:"+attribute);
				
			}else {
				HttpURLConnection http=(HttpURLConnection)(new URL(attribute).openConnection());
				http.setRequestMethod("HEAD");
				http.connect();
				int status = http.getResponseCode();
				if(status==200) {
					System.out.println("workind links:"+attribute);
				}
				else {
					System.out.println("broken links:"+attribute);
				}
			}
	    }
	    	}
	    
	

	

@When("click create new account")
public void click_create_new_account() {
   // WebElement Element = Driver.findElement(By.xpath("(//a[contains(text(),'Sign')])[1]"));
	x.button(al.getSignin());
	
}
@When("user enter the name one dim list")
public void user_enter_the_name_one_dim_list(DataTable dataTable) {
	

	List<String> li = dataTable.asList();
	String name = li.get(0);
	//WebElement Element = Driver.findElement(By.xpath("(//input[@type='text'])[1]"));
	x.input(al.getName(), name);
}

@When("user enter the surname one dim list")
public void user_enter_the_surname_one_dim_list(DataTable dataTable) {
	List<String> li1 = dataTable.asList();
String surname = li1.get(0);
//WebElement Element1 = Driver.findElement(By.xpath("(//input[@type='text'])[2]"));
x.input(al.getSurname(), surname);
    
}

@When("user enter the mail id one dim list")
public void user_enter_the_mail_id_one_dim_list(DataTable dataTable) {
	List<String> li2 = dataTable.asList();	
	String mail = li2.get(0);
 // WebElement Element2 = Driver.findElement(By.xpath("(//input[@type='text'])[3]"));
  x.input(al.getMail(), mail);
  
}

@When("re-enter mail id one dim list")
public void re_enter_mail_id_one_dim_list(DataTable dataTable) {
	List<String> ll = dataTable.asList();
	String remail = ll.get(0);
	//WebElement Element3 = Driver.findElement(By.xpath("(//input[@type='text'])[4]"));
	x.input(al.getRemail(), remail);
}

@When("user enter the password one dim list")
public void user_enter_the_password_one_dim_list(DataTable dataTable) {
	List<String> li3 = dataTable.asList();
	
	String pass = li3.get(0);
   //  WebElement Element4 = Driver.findElement(By.xpath("//input[@type='password']"));
     x.input(al.getPassword(), pass);
     
}

@Then("select the DOB")
public void select_the_dob() {
	
	
	//WebElement date = Driver.findElement(By.xpath("//a[contains(text(),'Use date of birth')]"));
	x.button(al.getDOB());
	//WebElement Element = Driver.findElement(By.xpath("//select[@title='Day']"));
    x.selectbyvalue(al.getDate(), "28");
  
   // WebElement Element1 = Driver.findElement(By.xpath("//select[@title='Month']"));
    x.selectbyindex(al.getMonth(), 6);
  //  WebElement Element2 = Driver.findElement(By.xpath("//select[@title='Year']"));
    x.selectbyvisibletext(al.getYear(), "2013");
    
}

@Then("select the gender")
public void select_the_gender() {
	//.findElement(By.xpath("(//input[@type='radio'])[2]"));
	x.button(al.getGender());
	
}

@Then("click Signup")
public void click_signup() throws IOException  {
  
	

	File src = x.getscreenshot();
	File ds=new File("C:\\Users\\Public\\FacebookCucumber\\src\\test\\resources.png");
	FileUtils.copyFile(src,ds);
   

	
	// Driver.findElement(By.xpath("(//button[@type='submit'])[1]"));
	 x.button(al.getSignup());
	
    
}

/*@When("user enter the name one dim map")
public void user_enter_the_name_one_dim_map(DataTable dataTable) {
	Map<String, String> Mp = dataTable.asMap(String.class, String.class);

	String name1 = Mp.get("name");
	WebElement text = driver.findElement(By.xpath("(//input[@type='text'])[1]"));
	
}

/*@When("user enter the surname one dim map")
public void user_enter_the_surname_one_dim_map(DataTable dataTable) {
	
	Map<String, String> mp1 = dataTable.asMap(String.class, String.class);
	String surnam = mp1.get("surname");
	WebElement text1 = Driver.findElement(By.xpath("(//input[@type='text'])[2]"));
	
	
}

@When("user enter the mail id one dim map")
public void user_enter_the_mail_id_one_dim_map(DataTable dataTable) {
	Map<String, String> mp2 = dataTable.asMap(String.class, String.class);
	String mail1 = mp2.get("mail");
	WebElement text2 = Driver.findElement(By.xpath("(//input[@type='text'])[3]"));
	
	
}

@When("re-enter mail id one dim map")
public void re_enter_mail_id_one_dim_map(DataTable dataTable) {
	Map<String, String> remail1 = dataTable.asMap(String.class, String.class); 
	String mail2 = remail1.get("remail");
	Driver.findElement(By.xpath("(//input[@type='text'])[4]")).sendKeys(mail2,Keys.ENTER);

}

@When("user enter the password one dim map")
public void user_enter_the_password_one_dim_map(DataTable dataTable) {
	Map<String, String> mp3 = dataTable.asMap(String.class, String.class);
	String pass1 = mp3.get("pass");
	Driver.findElement(By.xpath("//input[@type='password']")).sendKeys(pass1,Keys.ENTER);
	
}*/
@When("user enter the name {string}")
public void user_enter_the_name(String name) {
	
	//WebElement find = Driver.findElement(By.xpath("(//input[@type='text'])[1]"));
	x.input(al.getName(), name);

}

@When("user enter the surname {string}")
public void user_enter_the_surname(String sur) {
	//WebElement find1 = Driver.findElement(By.xpath("(//input[@type='text'])[2]"));
	x.input(al.getSurname(), sur);
    
  
}

@When("user enter the mail id {string}")
public void user_enter_the_mail_id(String mail) {
	//WebElement find2 = Driver.findElement(By.xpath("(//input[@type='text'])[3]"));
	x.input(al.getMail(), mail);
	
	
    
}

@When("re-enter mail id {string}")
public void re_enter_mail_id(String remail) {
	//WebElement find3 = Driver.findElement(By.xpath("(//input[@type='text'])[4]"));
	x.input(al.getRemail(), remail);
	}
  


@When("user enter the password {string}")
public void user_enter_the_password(String pass) {
	// WebElement find4 = Driver.findElement(By.xpath("//input[@type='password']"));
	 x.input(al.getPassword(), pass);
	}
  
}


