# Module Instructor Onboarding

This onboarding tool is meant for you to learn more about the nuts and bolts of being a Module Instructor.

You have been introduced to App Academy by HR and you have learned the philosophy and many of the rules of a/A. Always feel free to refer back to the [instructor guide][instructor-guide] if you need to freshen up on Andragogy and the a/A Approach to Teaching.

## **MAKE SURE YOU HAVE ACCESS**

You will need access to many destinations.

1. 1 Password
2. Confluence
3. Progress Tracker
4. a/A Open
5. Slack
6. Zoom (make sure you have a license so that you can have Host functionality)
7. Vimeo or Google Docs (for uploading Videos)
8. App Academy Starters
9. Modular Curriculum
10. Assessments Github
11. Github groups
12. Postman Team
13. Namely
14. Instructor Dashboard
15. Cohort Tracking Sheet

## Preparation for your first time

Here are some suggestions when preparing for your specific module

### 1. Learn the Material

The first think you are going to want to do is familiarize yourself with your module's material. The best place to do this is through using App Academy Open. If you have not been given access please request it from your Senior Manager. Here you will be able to study the Readings, Videos, and Projects that you will be included when teaching your Module.

Another proper option for learning the written material is through using the [Modular Curriculum][modular-curriculum]

If there are recorded sessions of your Module's Lectures, this may also help you to get a feel for how your module's lecture is currently administered.

### 2. Meet With The Current Module Instructor

Feel free to Slack the current Module Instructor and ask for a meeting to learn the ins and outs of the Module. They will be able to fill in the gaps that perhaps have not been filled thus far.

### 3. Shadow the Instructor

You should shadow your Module at least 3 times to get a feeling for the flow. If you have time you can also Shadow other modules. If you are going to shadow another module:

1. Slack the instructor to let them know you will be Shadowing. Maybe you have questions for them as well.
2. You can [navigate to the Zoom Room][navigate-to-zoom-room] for the module by using Progress Tracker.
3. Take notes on how class is balanced between Zoom Chat Rooms, Slack, interaction with [a/A Open][app-academy-open] as well as the flow of the lectures.

### 4. Prepare for Your Lectures

Based on what you have learned, you are now ready to start preparing your lectures.
Your preparation will vary based on the Module that you will be teaching. Always keep in mind what you learned in the approach you learned in the [a/A Instructional Guide][instructional-guide]

Here are some tips that may help you when preparing:

1. If you are going to demo, look for the missing pieces between the readings, videos and the projects and fill in those pieces.
2. Visual diagrams and images are a great tool for Visual Learners
3. Practice teaching on your Zoom account and record yourself to see how well you coordinate with the tools and sharing your screen etc.
4. If you are using web tools, practice using them while you record to make sure that your execution is seamless.

## Class Administration

### Morning Boost

Every class begins with a Morning Boost. Navigate to the proper week and day for your cohort and give your class 5-6 minutes to complete the morning boost. You may go over the answers with them aftewards if you choose and depending on time. If you need a stopwatch to monitor and share the time with the class you can download your own stopwatch app.
Here is a link for an [online stopwatch][online-stopwatch] if you don't have your own.

### How Manage the Questions Channel

**During Lecture**
In order to maintain the pace of the class, questions should be allowed but controlled properly. During Lecture, instruct students who have long answer questions to post them in the modules `online-question` channel. The Jr. TA's should be instructed to keep an eye on the lecture channel and answer appropriate questions. If chat is enabled for the cohort, keep an eye on chat for questions as well as for hands raised on Zoom. Maintain control of the length of answers for questions as well in order to maintain class pace.

**During Pair Programming**

In the Progress Tracker, choose the `Questions` option in the Left Sidebar.
A numbered diagram of squares will be shown to indicate the Zoom rooms where students are working. The numbers in the rooms will often but not always match the Zoom Breakout Room numbers.

Monitor the floor to assure that Jr. TA's answer questions in a timely manner.
Based on the [Division of Responsibilities][division-of-responsibilities] document, if there is a question that has been waiting for 10 or more minutes and all Jr. TA's are in other rooms, it is your responsibility to enter the floor and answer that question.

**Answering A Question**

On Progress Tracker, hover over the Square for the question you will be answering.
When you hover, a bar should slide from the right with a `Take` label and the name of the student(s) should also be displayed. Click that label.
Your [Avatar][gravatar], if you have one will show next to the square. Next on Zoom, navigate to the Breakout room for the student and answer their question(s).
After you have completed the question(s), return to the Progress Tracker and hover over the question that you took. A sidebar with `Close` should be displayed. Choose `Close` to close out your question. If there are no more long standing questions you can go back to prepping for your next lecture.

## Managing Mentoring you Module Team

Part of the job of the Module Instructor is to mentor and manage a team of Jr. TA's. You may answer questions about code, give mini-lectures, as well as have them practice teach lectures in order to learn the information more thoroughly.

### Delegating Tasks

You will delegate tasks as needed to Jr. TA's. These can include curriculum updates, creating documents, running kahoots, lecturing class, training new Jr. TA's, or assigning a person to answer questions on Slack.

### Conducting One on One's

One on one's with your Jr. TA's should be conducted at least once per cohort.
This is a time where you will be able to share progress and goals with your Jr. TA.
This is also a time to ask your Jr. TA questions to find out how they are feeling and what their current goals are.

Before conducting your One on One, you should also check the Instructor Dashboard and review all comments on that Jr. TA. Check for negative comments, but also check for extraordinary comments that you will be able to share with that TA. Be sure to maintain a balance of positive and negative.

There is also a wonderful script created by Jesse Warren to find the average of the TA's overall ratings. Navigate to the TA's comments, then paste the script in the browser console to receive the results.

**Instructor Feedback Average Script**

```js
totalScoreSum = 0;
limit = undefined; // change to a number to limit to a number of pages (x20 for scores)
determineCurrentPageAverage = () => {
  const pageScores = [
    ...document.querySelectorAll(
      '.MuiTypography-root.MuiTypography-h4.MuiTypography-colorTextPrimary'
    ),
  ].map(ele => parseInt(ele.innerHTML));
  totalScoreSum += pageScores.length;
  return pageScores.reduce((a, b) => a + b) / pageScores.length;
};
runningSum = determineCurrentPageAverage();
paginations = [...document.querySelector('.MuiPagination-ul').children];
paginationCount = limit
  ? limit
  : parseInt(paginations[paginations.length - 2].innerText);
for (i = 1; i < paginationCount; i++) {
  paginations = [...document.querySelector('.MuiPagination-ul').children];
  let page;
  if (i < 6) {
    page = paginations[i].children[0];
  } else {
    if (paginationCount - 2 <= i) {
      console.log('last two!');
      page = paginations[6 + i - (paginationCount - 2)].children[0];
    } else {
      page = paginations[5].children[0];
    }
  }
  page.click();
  runningSum += determineCurrentPageAverage();
}
console.log(
  'Your average score is:',
  runningSum / paginationCount,
  'across',
  totalScoreSum,
  'scores'
);
```

**Possible Questions**

1. How did you feel during the cohort
2. What are your goals in App Academy
3. What can I do to help you in any way
4. What suggestions do you have for improving the module
5. If you were to transfer modules what would be your module preference

## Culture Curriculum

There may be a Culture Curriculum moment assigned to your module. It is up to you to coordinate with the Curriculum Advisor in order to schedule proper class time for the curriculum.

## Delivering Feedback to Curriculum

You are expected to deliver feedback to curriculum as well as send updates, typos, mistakes and improvements to them.

In order to correct mistakes that are on App Academy Open, please follow the instructions given in the [X-Curriculum-Flow][x-curriculum-guideline] guide. Refer to the `How to Contribute to Modular-Curriculum` section to understand how to use a proper git workflow on [Modular Curriculum][modular-curriculum] and create a Pull Request.

If possible make any corrections as soon as possible, during your cohort, to enable the curriculum team to make changes before the two week lead in to your nest cohort. If your module has a prep week, you may collect mistakes found in the curriculum and handle all of them during that prep week.

After you have made a pull request, go to the `instruction_x_curriculum` channel on Slack and mention that you have made a PR along with a short description and the PR link.

## Prep Week

If your module has a prep week, this will be a good time to meet with your team as a whole, have one on one's, do some team building, make assignments.

**Prep Week Responsibilities**

1. The first responsibility for TA's on a prep week is to help any modules that need help on the floor.
2. If there are things to improve in your regular cohort for you and your TA's this is a time to do it. (Lecture Improvements for example)
3. This can be a good time to test your next cohort's Assement to assure it is functioning properly using the [Assessment Checker][assessment-checker] tool.
4. Some TA's may be ramping up to learning how to Lecture. This is a good time for you to have them practice lecture in front of the team and give suggestions for improvements.
5. Curriculum may have items that they would like help with. You and your team can also volunteer to help them with curriculum if all other cohort preparation needs have been met.

## Releasing the Next Cohort Curriculum to the Class

It is usually a good idea to release the next cohort Curriculum for a/A Open to your Jr. TA's at least a week before the cohort begins. Instructions for doing this are located at this [Confluence Link][release-curriculum]. This will allow time for everyone to review what has been released and find mistakes that require hot fixes before start of the next curriculum

## Assessments

Your module will most likely have one or more assessments. Assessments always occur on Mondays. If there is a Cohort Assistant or Principal Technical Mentor, you are not responsible for setting up or releasing the Assessment. However, you should know how to set up and release the assessment in the event that neither are present.

[Setting Up for an Assessment][setup-assessment]

[instructor-guide]: https://docs.google.com/document/d/155tlfvARPjUxMY5ay9GZcr0soJ6R1RSdORh6tMIQbdQ/edit
[modular-curriculum]: https://github.com/appacademy/Modular-Curriculum/tree/staging/content
[app-academy-open]: https://open.appacademy.io/
[navigate-to-zoom-room]: https://github.com/jdrichardsappacad/AppAcademy-Online-Onboarding-Instruction-Guide/blob/master/Resources/ModuleZoomRoom.md
[instructional-guide]: https://appacademy.github.io/instruction-guide/learning/
[division-of-responsibilities]: https://docs.google.com/document/d/1mc6o4ulw6_uo_dipr6m9jq7ie25vwh5xbcnifyw9q4w/edit
[gravatar]: https://en.gravatar.com/
[x-curriculum-guideline]: https://github.com/appacademy/curriculum-developer-guide/wiki/Instruction-x-Curriculum-Workflow
[modular-curriculum]: https://github.com/appacademy/Modular-Curriculum/
[assessment-checker]: https://github.com/appacademy/assessment_checker
[online-stopwatch]: https://www.google.com/search?q=stopwatch&oq=stopwatch&aqs=chrome..69i57.3448j0j1&sourceid=chrome&ie=UTF-8
[release-curriculum]: https://appacademyio.atlassian.net/wiki/spaces/CUR/pages/534675541/App+Academy+Online+-+How+to+Enroll+People+in+Courses
[setup-assessment]: https://docs.google.com/document/d/1BcGqC1cAZvn-kYW-1QnN4A1id8GN_UB0K2XmgAcVqsg/edit
