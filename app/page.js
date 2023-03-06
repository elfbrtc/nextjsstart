import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Roboto} from 'next/font/google';
import { cookies } from 'next/headers';
import Trial from './trial';
import { redirect } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchData1 = async () => {
  const res = await fetch('https://restcountries.com/v3.1/name/peru')
  return res.json()

}

const fetchData2 = async () => {
  const res = await fetch('https://restcountries.com/v3.1/name/united')
  return res.json()

}

const Page = async() => {
  const newCookies = cookies();
  let nav1 = false

  const data1 =  fetchData1()
  const data2 =  fetchData2()

  const resultData = await Promise.all([data1, data2])

  console.log(resultData, "resultData")


  if(nav1){
    redirect('/about')
  }

  console.log("sdlkfjdlkfjdslkfjk")
  console.log(newCookies.get('cookies1').value)
  return (
    <>
    <div>Page</div>
    <Link className={inter.className} href="/about" >Yönlendirme1</Link>
    <Link className={roboto.className} href="/about?name=elf&surname=barutcu" >Yönlendirme2</Link>
    <Link href={{
      pathname: '/about',
      query: {name: 'elf', surname: 'barutcu'}
      
    }} >Yönlendirme3</Link>

    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/640px-VAN_CAT.png' 
    width={200} 
    height={200} />
    <Trial/>
    </>

    
  )
}

export default Page