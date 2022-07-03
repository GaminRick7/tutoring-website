import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import { Container, Grid, Button, Stack, Card } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useLanguageContext } from '../context/LangContext';

export default function Home() {
  const lang = useLanguageContext().language;

  return (
    <div>
      {/* Site Meta-Data */}
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
        <Grid container className={styles.startingContainer} alignItems="center" direction="row-reverse">
          <Image src="/images/startingBubbles.svg" layout="raw" width={100} height={100} className={styles.startingBubbles}></Image>
          <Image src="/images/startingBubblesMobile.svg" layout="raw" width={100} height={100} className={styles.startingBubblesMobile}></Image>

          <Grid item container xs={12} sm={5} className={styles.startingRight} justifyContent="center">
            <Image src="/images/boy.svg" layout="raw" width={100} height={100} className={styles.boyImage}></Image>
          </Grid>
          <Grid item container xs={12} sm={7} className={styles.startingLeft}>
            <h1 className={styles.title}>
              { 
                lang == "english" 
                  ? 'Students to Students Tutoring' 
                  : '学生对学生辅导'
              }
              </h1>
            <p className={styles.subtitle}>
              {
                lang == "english"
                  ? 'This summer, we’ll have classes suitable for all students, as well as free trial lessons and webinars open to the public!'
                  : '今年夏天，我们将开设适合所有学生的课程，以及向公众开放的免费试听课程和网络研讨会！'
              }
            </p>
            <Link href="/courses"><Button variant="contained" className={styles.searchButton}>
              {
                lang == "english"
                  ? 'Search Courses'
                  : '搜索课程'
              }  
            </Button></Link>
          </Grid>
        </Grid>

        {/* Container for "Enroll your child now!" Section */}
        <Grid container className={styles.enrollContainer} alignItems="center" justifyContent="center">
          <Image src="/images/enrollBubblesTop.svg" layout="raw" width={100} height={100} className={styles.enrollBubblesTop}></Image>
          <Image src="/images/enrollBubblesBottom.svg" layout="raw" width={100} height={100} className={styles.enrollBubblesBottom}></Image>
          <Image src="/images/enrollBubblesMobile.svg" layout="raw" width={100} height={100} className={styles.enrollBubblesMobile}></Image>
          <Grid container item xs={12} justifyContent="center" sx={{zIndex: 2}}>
            <Grid item>
              <h3 className={styles.enrollTitle}>Enroll your child now!</h3>
              <p className={styles.enrollText}> Our mission is to provide extracurricular education to as many students as possible at an affordable price. </p>
            </Grid>
            <Grid container item alignItems="center" justifyContent="center">
              <EnrollItem src="/images/money.svg" text="Affordable prices! Each lesson varies from $4 to $14 per 45 minutes."></EnrollItem>
              <EnrollItem src="/images/books.svg" text="Enhance your child’s skills with our courses. Each course contains 12-14 lessons."></EnrollItem>
              <EnrollItem src="/images/boy2.svg" text="Course material range from elementary school to high school level."></EnrollItem>
            </Grid>
          </Grid>
        </Grid>

        {/* Container for "For students, by students" Section */}
        <Grid container className={styles.forStudentsContainer} alignItems="center" justifyContent="center">
          <Image src="/images/studentsBubblesLeft.svg" layout="raw" width={100} height={100} className={styles.studentsBubblesLeft}></Image>
          <Image src="/images/studentsBubblesRight.svg" layout="raw" width={100} height={100} className={styles.studentsBubblesRight}></Image>
          <Image src="/images/studentsBubblesMid.svg" layout="raw" width={100} height={100} className={styles.studentsBubblesMid}></Image>

          <Grid item xs={12} sx={{zIndex: 2}}>

            <Image src="/images/gradHat.svg" height={150} width={150}></Image>
            <h3 className={styles.enrollTitle}>For students, by students.</h3>
            <p className={styles.forStudentsText}>Our priority is providing students with quality tutoring. All tutors are from either a top Canadian university (UoT, UBC, UWaterloo, McGill) or part of the prestigious International Baccalaureate (IB) program.</p>
            <hr className={styles.forStudentsHr}></hr>
          </Grid>
        </Grid>

        {/* Container for "Interested in getting started" section */}
        <Grid container className={styles.interestedContainer} justifyContent="center" id="interestedSection">
          <Image src="/images/interestedBubblesLeft.svg" layout="raw" width={100} height={100} className={styles.interestedBubblesLeft}></Image>
          <Image src="/images/interestedBubblesRight.svg" layout="raw" width={100} height={100} className={styles.interestedBubblesRight}></Image>

          <Grid container item className={styles.interestedBox} justifyContent="center">
            <Grid item xs={12}>
              <h3 className={styles.interestedTitle}>Interested in getting started?</h3>
              <p className={styles.interestedText}>Simple. Just follow the next five steps:</p>
            </Grid>
            <Grid container item className={styles.interestedSteps} spacing={2}>
              <InterestedStep 
                step="1" 
                title="Look through our available courses"
                text="Navigate to the “Courses” page and use the grade filter to find the courses tailored to your child’s grade."
              ></InterestedStep>
              <InterestedStep 
                step="2" 
                title="Pick a course"
                text="Find a course that is to you and your child’s liking. Click on “View details” for more information about the course."
              ></InterestedStep>
              <InterestedStep 
                step="3" 
                title="Attend the Trial Lesson"
                text="Take a lesson for free to see if the course is fit for your child. Details are under “View details” of the course."
              ></InterestedStep>
              <InterestedStep 
                step="4" 
                title="Pay with e-transfer"
                text="Send the correct amount to online2020courses@gmail.com via e-transfer. The price can be found in details of course."
              ></InterestedStep>
              <InterestedStep 
                step="5" 
                title="Send an email to us!"
                text="Include the following information in the email to online2020courses@gmail.com."
              ></InterestedStep>
            </Grid>
            <Grid item xs={12}>
              <Image src="/images/email.svg" layout="raw" width={100} height={100} className={styles.emailImage}></Image>
            </Grid>
          </Grid>
        </Grid>

        {/* Container for discount section */}
        <Grid container className={styles.discountContainer} justifyContent="center">
          <Grid container item className={styles.discountBox} justifyContent="center">
            <Image src="/images/discount.svg" layout="raw" width={100} height={100} className={styles.discountImage}></Image>
            <Grid item xs={12}>
                <h3 className={styles.discountTitle}>Get a discount!</h3>
                <p className={styles.discountText}>We will give a ~20% discount on tuition fees for each new student introduced. For example, if your friend spends $100 on courses, you will be given a $20 discount.</p>
              </Grid>
          </Grid>
        </Grid>

    </div>
  )
}

// Component for each of the cards in the "Enroll your child now!" section
function EnrollItem({src, text}) {
  return (
    <Grid container alignContent="center" md={4} xs={12}>
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
      <Grid container item xs={12} className={styles.interestedStepBox}>
        <div className={styles.interestedStepCircle}>
          <p className={styles.interestedStepNumber}>{step}</p>
        </div>
        <Grid item>
          <p className={styles.interestedStepTitle}>{title}</p>
          <p className={styles.interestedStepText}>{text}</p>
        </Grid>
      </Grid>
    </Grid>
  )
  
}