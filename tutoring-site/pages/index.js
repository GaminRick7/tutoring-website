import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Grid, Button, Stack, Card } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useLanguageContext } from '../context/LangContext';

export default function Home() {
  const isEng = useLanguageContext().language;

  let homeText = 'Home';
  let titleText = 'Students to Students Tutoring';
  let subtitleText = "Welcome! We are a non-profit student-run organization. This summer, we'll have free seminars and lessons online!";
  let searchCoursesButtonText = 'Search Courses';
  let enrollTitleText = 'Enroll your child now!';
  let missionText = 'Our mission is to provide extracurricular education to as many students as possible at an affordable price.';
  let card1Text = 'Affordable prices! Each lesson varies from $6 to $12 per 45-60 minutes.';
  let card2Text = 'Enhance your child’s learning with our online courses.';
  let card3Text = 'Course material of all levels includings topics such as English, French, math, and other interesting subjects!';
  let forStudentsTitleText = 'For students, by students.';
  let ourPriorityText = 'We provide students with quality tutoring. All tutors are from either a top Canadian university (uWaterloo, UofT, UBC, McGill) or part of the prestigious International Baccalaureate (IB) program.';
  let interestedTitleText = 'Interested in getting started?';
  let interestedSubtitleText = 'Simple. Just follow these two steps:';
  
  let step1 = 'Step 1';
  let step2 = 'Step 2';
  let step1TitleText = 'Look for a suitable course.';
  let step1SubText = 'Navigate to the “Courses” page and use the grade filter to find the courses tailored to your child’s grade.';
  let step2TitleText = 'E-transfer the course fee to online2020courses@gmail.com, and please include student name, contact information, and the courses selected.';
  let step2SubText = 'Find a course that is to you and your child’s liking. Click on “View details” for more information about the course.';
  let step3TitleText = 'Attend the Trial Lesson';
  let step3SubText = 'Take a lesson for free to see if the course is fit for your child. Details are under “View details” of the course.';
  let step4TitleText = 'Pay with e-transfer';
  let step4SubText = 'Send the correct amount to online2020courses@gmail.com via e-transfer. The price can be found in details of course.';
  let step5TitleText = 'Send an email to us!';
  let step5SubText = 'Include the following information in the email to online2020courses@gmail.com.';
 
  let discountTitleText = 'Get a discount!';
  let discountSubText = 'We will give a ~20% discount on tuition fees for each new student introduced. For example, if your friend spends $100 on courses, you will be given a $20 discount.';

  if (!isEng) {
    homeText = '主页';
    titleText = '学生学习辅导';
    subtitleText = '学生学习辅导是由学生组织的辅导机构。今年夏天，我们会开设适合中小学生的课程，以及免费试听课和网上讲座！';
    searchCoursesButtonText = '搜索课程';
    enrollTitleText = '欢迎大家报名！';
    missionText = '我们的宗旨是以便宜的价格为尽可能多的学生提供课外教育。';
    card1Text = '价格实惠！每节课45-60分钟，学费只要$6-12加元。';
    card2Text = '我们的课程可以提高您孩子的学习水平。每门课程 8-12 节课。';
    card3Text = '我们的课程适合中小学生，包括英语，法语，数学，电脑编程和其他兴趣班。';
    forStudentsTitleText = '知识的传递，从学生到学生';
    ourPriorityText = '我们提供高质量的辅导，教课老师来自加拿大最顶尖的大学（UoT、UBC、UWaterloo、McGill）或者是正在 IB Program 学习的学生。';
    interestedTitleText = '如何注册课程？';
    interestedSubtitleText = '很简单，只需完成下面两个步骤：';

    step1 = '步骤1';
    step2 = '第2步';
    step1TitleText = '到 “课程” 页面查找合适的课程。';
    step2TitleText = 'E-transfer学费到 online2020courses@gmail.com，请注明学生名字，联系方式和所选课程。'

    // step1TitleText = '浏览我们提供的课程';
    // step1SubText = '导航到 “课程” 页面并使用 “年级” 过滤器查找适合您孩子的课程。';
    // step2TitleText = '选择一门课程';
    // step2SubText = '找到适合您和您孩子喜欢的课程。 点击 “查看详情” 了解更多课程信息。';
    // step3TitleText = '参加试听课';
    // step3SubText = '免费参加试听课，看看该课程是否适合您的孩子。 详细信息将会显示在课程的 “查看详情” 的页面下。';
    // step4TitleText = '使用电子转账付款'
    // step4SubText = '请将正确的金额发送至 online2020courses@gmail.com 邮件地址。 价格当然可以在详细信息中找到。';
    // step5TitleText = '发送电子邮件给我们！';
    // step5SubText = '请填好以下信息，将它发送至 online2020courses@gmail.com 的邮件地址。';

    discountTitleText = '推荐优惠';
    discountSubText = '欢迎推荐您的朋友们来一起学习！我们会给推荐者提供高达20%的折扣。比如您推荐的朋友新报了$100的课程，您自己将获得$20的学费折扣。';
  }

  return (
    <div>
      {/* Site Meta-Data */}
      <Head>
        <title>{homeText}</title>
        <meta name="description" content="Students to Students Tutoring Website - Home" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
        
        {/* 
          Responsive design is done primarily using the Grid component 
          provided by MaterialUI. Replicated flex position in traditional CSS.
        
          Images are displayed with a special Images component provided by
          NextJS to ensure proper image loading. All images are in 
          /public/images
        */}

        {/* Navbar */}
        <Navbar></Navbar>
        
        {/* Container for Starting Section */}
        <div class="">
        <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="-z-10 absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#04c2bf] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          We are offering discounts! <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{titleText}</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">{subtitleText}</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/Courses" class="z-30 rounded-md bg-[#5bc9a8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#44ab8c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{searchCoursesButtonText}</a>
        </div>
      </div>
    </div>
    <div class="-z-10 absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#04c2bf] to-[#6cf0c8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
    </div>
  </div>
</div>


  {/* Container for "For students, by students" Section */}
  <div class=" py-24 sm:py-32 border-b">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{enrollTitleText}</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">{missionText}</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5bc9a8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
            Push to deploy
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{card1Text}</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5bc9a8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            </div>
            SSL certificates
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{card2Text}</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5bc9a8]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            Simple queues
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{card3Text}</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5bc9a8]">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
              </svg>
            </div>
            Advanced security
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{card3Text}</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

        <section class="border-b">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{forStudentsTitleText}</h2>
                <p class="mb-4">{ourPriorityText}</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"></img>
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"></img>
            </div>
        </div>
      </section>
      <div class="py-24 sm:py-32 border-b">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">New users annually</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>
<section class="">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Testimonials</h2>
          <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                  <h3 class="text-lg font-semibold text-gray-900">Speechless with how easy this was to integrate</h3>
                  <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                  <p class="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                  <p class="my-4">If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"></img>
                  <div class="space-y-0.5 font-medium">
                      <div>Bonnie Green</div>
                      <div class="text-sm font-light text-gray-500">Parent</div>
                  </div>
              </figcaption>    
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                  <h3 class="text-lg font-semibold text-gray-900">Solid foundation for any project</h3>
                  <p class="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
                  <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"></img>
                  <div class="space-y-0.5 font-medium">
                      <div>Roberta Casas</div>
                      <div class="text-sm font-light text-gray-500">Professor at University of Ottawa</div>
                  </div>
              </figcaption>    
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                  <h3 class="text-lg font-semibold text-gray-900">Mindblowing workflow and variants</h3>
                  <p class="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
                  <p class="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
                  <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"></img>
                  <div class="space-y-0.5 font-medium">
                      <div>Jese Leos</div>
                      <div class="text-sm font-light text-gray-500">Student</div>
                  </div>
              </figcaption>    
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                  <h3 class="text-lg font-semibold text-gray-900">Efficient Collaborating</h3>
                  <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                  <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"></img>
                  <div class="space-y-0.5 font-medium">
                      <div>Joseph McFall</div>
                      <div class="text-sm font-light text-gray-500">Parent</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
    </div>
</section>

<div class="p-4 border border-gray-200 shadow-lg rounded-lg sm:p-8 m-4 bg-gray-100">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 text-center">{interestedTitleText}</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg text-center">{interestedSubtitleText}</p>

<div class="flex justify-center">
<ol class="relative border-l border-gray-200">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400">{step1}</time>
        <h3 class="text-lg font-semibold text-gray-900">{step1TitleText}</h3>
        <p class="mb-4 text-base font-normal text-gray-500">{step1SubText}</p>
        <a href="/Courses" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">{searchCoursesButtonText}<svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400">{step2}</time>
        <h3 class="text-lg font-semibold text-gray-900">{step2TitleText}</h3>
        <p class="text-base font-normal text-gray-500">{step2SubText}</p>
    </li>
</ol>
</div>

</div>
<Footer></Footer>
</div>
  )
}

// Component for each of the cards in the "Enroll your child now!" section
function EnrollItem({src, text}) {
  return (
    <Grid container item alignContent="center" md={4} xs={12} className={styles.enrollItem}>
      <div className={styles.enrollItemContainer}>
        <Grid container spacing={2}>
          <Grid container item xs={5} md={12} alignContent="center" justifyContent="center">
            <Image src={src} width={100} height={100} className={styles.enrollItemImage}></Image>
          </Grid>
          <Grid container item xs={7} md={12} alignContent="center">
            <p className={styles.enrollItemText}>{text}</p>  
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

function InterestedStep({step, title, text}) {
  return(
    <Grid container item className={styles.interestedStep} xs={12}>
      <Grid container alignItems="center" item xs={12} className={styles.interestedStepBox}>
        <Grid item className={styles.interestedStepCircle}>
          <p className={styles.interestedStepNumber}>{step}</p>
        </Grid>
        <Grid item>
          <p className={styles.interestedStepTitle}>{title}</p>
          {/* <p className={styles.interestedStepText}>{text}</p> */}
        </Grid>
      </Grid>
    </Grid>
  )
  
}