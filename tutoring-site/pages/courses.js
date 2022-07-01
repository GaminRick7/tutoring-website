import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Courses.module.scss'
import { Container, Grid, Button, Stack, Card, Typography, TextField, Box, Slider} from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoSearchCircleSharp } from "react-icons/io5";
import CourseItem from '../components/CourseItem';

//temp
import firebase from '../firebase-config.js';



function valueFormat(value) {
  if (value == 13) {
    return 'All';
  } else return value;
}

export default function courses() {

  const items = [1, 2, 3, 4];

  const [value, setValue] = useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      {/* Site Meta-Data */}
      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      {/* Top half section */}
      <Grid container className={styles.topSection} direction="column">
        <Image src="/images/coursesBubblesTopLeft.svg" layout="raw" width={100} height={100} className={styles.bubblesTopLeft}></Image>
        <Grid item className={styles.titlesContainer}>
          <h1 className={styles.title}>Courses Available</h1>
          <p className={styles.subtitle}>Interested but don’t know how to start? Click here for more info<span>
          <a href="../#interestedSection"><BsFillArrowRightCircleFill className={styles.arrowButton}/></a></span></p>
        </Grid>
        <Grid container className={styles.searchContainer}>
          <Grid item xs={12} sm={6}>
              <TextField fullWidth id="outlined-search" type="search" placeholder="Search..."/>
          </Grid>
          <Grid item>
            <Box sx={{ width: 250 }}>
              <Typography className={styles.gradeLabel} id="linear-slider" gutterBottom>
                Grade: {valueFormat(value)}
              </Typography>
              <Slider
                value={value}
                min={1}
                step={1}
                max={13}
                valueLabelFormat={valueFormat}
                onChange={handleChange}
                aria-labelledby="linear-slider"
              />
            </Box>
          </Grid>
          <Grid item>
            <IoSearchCircleSharp className={styles.searchButton}></IoSearchCircleSharp>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom half section */}
      <Grid container className={styles.botSection}>
       <Image src='/images/coursesBubblesLeft.svg' layout="raw" width={450} height={450} className={styles.bubblesLeft}></Image>
       <Image src='/images/coursesBubblesRight.svg' layout="raw" width={450} height={450} className={styles.bubblesRight}></Image>
       <Grid item className={styles.coursesContainer}>
          {items.map((item) => <CourseItem value={item}/>)}
       </Grid>
      </Grid>
    </>
  )
}