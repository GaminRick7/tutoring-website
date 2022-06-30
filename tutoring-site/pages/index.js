import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import { Container, Grid, Button, Stack, Card } from '@mui/material';

export default function Home() {
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
          <Grid item container xs={12} sm={5} className={styles.startingRight} justifyContent="center">
            <Image src="/images/boy.svg" layout="raw" width={100} height={100} className={styles.boyImage}></Image>
          </Grid>
          <Grid item container xs={12} sm={7} className={styles.startingLeft}>
            <h1 className={styles.title}> Students to Students Tutoring </h1>
            <p className={styles.subtitle}>This summer, we’ll have classes suitable for all students, as well as free trial lessons and webinars open to the public!</p>
            <Button variant="contained" className={styles.searchButton}>Search Courses</Button>
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
              <EnrollItem src="/images/books.svg" text="Enhance your child’s skills with our courses. Each course contains 10 lessons."></EnrollItem>
              <EnrollItem src="/images/boy2.svg" text="Course material range from elementary school to high school level."></EnrollItem>
            </Grid>
          </Grid>
        </Grid>


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
