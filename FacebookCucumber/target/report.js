$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Public/FacebookCucumber/src/test/resources/facebook.feature");
formatter.feature({
  "name": "facebook",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "create facebook account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the name \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter the surname \"\u003csurname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the mail id \"\u003cmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "re-enter mail id \"\u003cremail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "select the DOB",
  "keyword": "Then "
});
formatter.step({
  "name": "select the gender",
  "keyword": "Then "
});
formatter.step({
  "name": "click Signup",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "surname",
        "mail",
        "remail",
        "password"
      ]
    },
    {
      "cells": [
        "ddhcccb",
        "jddlkkld",
        "samysabari84@gmail.com",
        "samysabari84@gmail.com",
        "156565a5a"
      ]
    }
  ]
});
formatter.background({
  "name": "common functions",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.UnknownHostException: msedgedriver.azureedge.net\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1424)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.fallback(WebDriverManager.java:1440)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1421)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1414)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:419)\r\n\tat reusablecodes.Reusablecode.launch(Reusablecode.java:48)\r\n\tat com.facebook.Hooks.launch(Hooks.java:16)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.UnknownHostException: msedgedriver.azureedge.net\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:1578)\r\n\tat io.github.bonigarcia.wdm.managers.EdgeDriverManager.getDriverUrls(EdgeDriverManager.java:115)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.createUrlHandler(WebDriverManager.java:1445)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:1279)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1198)\r\n\t... 46 more\r\nCaused by: java.net.UnknownHostException: msedgedriver.azureedge.net\r\n\tat java.base/java.net.InetAddress$CachedAddresses.get(InetAddress.java:801)\r\n\tat java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1524)\r\n\tat java.base/java.net.InetAddress.getAllByName(InetAddress.java:1381)\r\n\tat java.base/java.net.InetAddress.getAllByName(InetAddress.java:1305)\r\n\tat org.apache.hc.client5.http.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:43)\r\n\tat org.apache.hc.client5.http.impl.io.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:141)\r\n\tat org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:447)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:162)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:172)\r\n\tat org.apache.hc.client5.http.impl.classic.ConnectExec.execute(ConnectExec.java:142)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ProtocolExec.execute(ProtocolExec.java:192)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.HttpRequestRetryExec.execute(HttpRequestRetryExec.java:96)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ContentCompressionExec.execute(ContentCompressionExec.java:152)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.RedirectExec.execute(RedirectExec.java:115)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalHttpClient.doExecute(InternalHttpClient.java:170)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:87)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.hc.client5.http.classic.HttpClient.executeOpen(HttpClient.java:183)\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:162)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:1563)\r\n\t... 50 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "launch the browser with url \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Facebooksignup.launch_the_browser_with_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click create new account",
  "keyword": "When "
});
formatter.match({
  "location": "Facebooksignup.click_create_new_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "create facebook account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the name \"ddhcccb\"",
  "keyword": "When "
});
formatter.match({
  "location": "Facebooksignup.user_enter_the_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the surname \"jddlkkld\"",
  "keyword": "And "
});
formatter.match({
  "location": "Facebooksignup.user_enter_the_surname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the mail id \"samysabari84@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Facebooksignup.user_enter_the_mail_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "re-enter mail id \"samysabari84@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Facebooksignup.re_enter_mail_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the password \"156565a5a\"",
  "keyword": "And "
});
formatter.match({
  "location": "Facebooksignup.user_enter_the_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the DOB",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebooksignup.select_the_dob()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the gender",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebooksignup.select_the_gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Signup",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebooksignup.click_signup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"reusablecodes.Reusablecode.Driver\" is null\r\n\tat com.facebook.Hooks.end(Hooks.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});