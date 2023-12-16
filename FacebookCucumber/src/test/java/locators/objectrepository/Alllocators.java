package locators.objectrepository;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import reusablecodes.Reusablecode;

public class Alllocators {

	Reusablecode x=Reusablecode.getInstance();
	public Alllocators() {
	
		PageFactory.initElements(x.Driver,this);
	}
	@FindBy(xpath="(//a[contains(text(),'Sign')])[1]")
	private WebElement signin;
	public WebElement getSignin() {
		return signin;
	}
	@FindBy(xpath="(//input[@type='text'])[1]")
	private WebElement name;
	@FindBy(xpath="(//input[@type='text'])[2]")
	private WebElement surname;
	@FindBy(xpath="(//input[@type='text'])[3]")
	private WebElement mail;
	@FindBy(xpath="(//input[@type='text'])[4]")
	private WebElement remail;
	@FindBy(xpath="//input[@type='password']")
	private WebElement password;
	@FindBy(xpath="(//button[@type='submit'])[1]")
	private WebElement signup;
	@FindBy(xpath="//a[contains(text(),'Use date of birth')]")
	private WebElement DOB;
	@FindBy(xpath="//select[@title='Day']")
	private WebElement Date;
	@FindBy(xpath="//select[@title='Month']")
	private WebElement month;
	@FindBy(xpath="//select[@title='Year']")
	private WebElement year;
	@FindBy(xpath="(//input[@type='radio'])[2]")
	private WebElement gender;
	public WebElement getName() {
		return name;
	}
	
	public WebElement getSurname() {
		return surname;
	}
	
	public WebElement getMail() {
		return mail;
	}
	
	public WebElement getRemail() {
		return remail;
	}
	
	public WebElement getPassword() {
		return password;
	}
	
	public WebElement getSignup() {
		return signup;
	}
	
	public WebElement getDOB() {
		return DOB;
	}
	public void setDOB(WebElement dOB) {
		DOB = dOB;
	}
	public WebElement getDate() {
		return Date;
	}
	public void setDate(WebElement date) {
		Date = date;
	}
	public WebElement getMonth() {
		return month;
	}
	
	public WebElement getYear() {
		return year;
	}
	
	public WebElement getGender() {
		return gender;
	}
	

}
