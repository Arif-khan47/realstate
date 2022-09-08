import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




function Footer() {
  const Studio = [
    { name: "Our Team", link: "/" },
    { name: "How we work", link: "/" },
    { name: "Culture", link: "/" },
    { name: "Documentation", link: "/" },
  ]
  const Service = [
    { name: "Research", link: "/" },
    { name: "Design", link: "/" },
    { name: "Testing", link: "/" },
    { name: "Development", link: "/" },
  ]
  const Resource = [
    { name: "Pricing", link: "/about" },
    { name: "Story", link: "/" },
    { name: "Blog", link: "/blogs" },
    { name: "Project", link: "/portfolio" },
  ]
  return (
    <>
      <div className="bg-[url(/img/Footer.jpg)] bg-cover bg-no-repeat ">
        <div className='text-[#E1BEE7] text-center my-20 pt-40'>
          <div className='font-extrabold text-4xl'>
            1 234 567
          </div>
          <div className='text-lg'>
            Users and Counting
          </div>
        </div>
        <div className='text-center text-white text-4xl font-semibold my-20'>
          What are you waiting for?
          <br />
        <button className='bg-helper rounded-lg hover:bg-helper2 text-base mt-5 p-2 w-[15rem]'>GET STARTED</button>
        </div>

        <div className='grid grid-cols-5 text-white mx-16 mt-20 mb-20'>
          <div className='col-span-1'>

            <div className='relative h-36 w-36 '>
              <Image
                src='/img/logo.png'
                objectFit='contain'
                layout='fill'
                className='w-fit h-fit'
              />
            </div>
            <div className='text-lg'>
              Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
            </div>
          </div>

          <div className='mt-14 col-span-1 mx-auto'>
            <span className='font-semibold text-[#E1BEE7] text-xl '>COMPANY</span>
            <ul className="justify-center my-5 mx-auto">
              {Studio.map((link) => (
                <li key={link.name} className="hover:text-helper text-lg mb-7">
                  <Link href={link.link} className="">{link.name}</Link>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='mt-14 col-span-1 laptop:my-10 mx-auto'>
            <span className='font-semibold text-[#E1BEE7] text-xl '>SERVICES</span>
            <ul className="gap-10 justify-center my-5 mx-auto">
              {Service.map((link) => (
                <li key={link.name} className="hover:text-helper text-lg mb-7">
                  <Link href={link.link} className="">{link.name}</Link>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='mt-14 col-span-1 mx-auto'>
            <span className='font-semibold text-[#E1BEE7] text-xl '>RESOURCES</span>
            <ul className="gap-10 justify-center my-5 opacity-[85%] mx-auto">
              {Resource.map((link) => (
                <li key={link.name} className="hover:text-helper text-lg mb-7">
                  <Link href={link.link} className="">{link.name}</Link>
                </li>
              ))
              }
            </ul>
          </div>

          <div className='col-span-1 mt-24'>
            <div>
              <div className='w-fit flex gap-6'>
                {/* Facebook  */}
                <a href="https://www.facebook.com/Mission20WorldwideLimited">
                  <svg
                    className="p-1 fill-[#E1BEE7] hover:fill-helper w-14 tablet:w-10"
                    viewBox="0 0 512 512">
                    <path
                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z">
                    </path>
                  </svg></a>

                {/* Twitter */}
                <a href="https://twitter.com/mission20_token">
                  <svg
                    className="p-1 fill-[#E1BEE7] hover:fill-helper  w-14 tablet:w-10"
                    viewBox="0 0 512 512">
                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                  </svg></a>
                {/* Instagram  */}
                <a href="https://www.instagram.com/mission20__/">
                  <svg
                    className="p-1 fill-[#E1BEE7] hover:fill-helper  w-14 tablet:w-10"
                    viewBox="0 0 512 512">
                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                  </svg></a>
                {/* Linkedin  */}
                <a href="https://www.linkedin.com/company/mission20worldwidelimited/">
                  <svg
                    className="p-1 fill-[#E1BEE7] hover:fill-helper w-14 tablet:w-10"
                    viewBox="0 0 512 512">
                    <path
                      d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z">
                    </path>
                  </svg></a>
              </div>
              <div className='w-fit flex gap-6 mt-2'>
                {/* Youtube */}
                <a href="https://www.youtube.com/channel/UCZibtpim2g2KYBYYEtOJwsw">
                  <svg
                    className="p-1 fill-[#E1BEE7] hover:fill-helper  w-14 tablet:w-10"
                    viewBox="0 0 512 512"
                  >
                    <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                  </svg></a>
                {/* Discord  */}
                <a href="https://discord.com/invite/ehwrmgNe">
                  <svg
                    className="p-1 fill-[#E1BEE7] hover:fill-helper  w-14 tablet:w-10"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z"></path>
                    <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zm88.38 0c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z"></path>
                  </svg></a>
                {/* Telegram  */}
                <a href="https://t.me/mission20coin">
                  <svg
                    className='p-1 fill-[#E1BEE7] hover:fill-helper  w-14 tablet:w-10'
                    viewBox="0 0 50 50"
                  >
                    <path d="M25 2c12.703 0 23 10.297 23 23S37.703 48 25 48 2 37.703 2 25 12.297 2 25 2zm7.934 32.375c.423-1.298 2.405-14.234 2.65-16.783.074-.772-.17-1.285-.648-1.514-.578-.278-1.434-.139-2.427.219-1.362.491-18.774 7.884-19.78 8.312-.954.405-1.856.847-1.856 1.487 0 .45.267.703 1.003.966.766.273 2.695.858 3.834 1.172 1.097.303 2.346.04 3.046-.395.742-.461 9.305-6.191 9.92-6.693.614-.502 1.104.141.602.644-.502.502-6.38 6.207-7.155 6.997-.941.959-.273 1.953.358 2.351.721.454 5.906 3.932 6.687 4.49.781.558 1.573.811 2.298.811.725 0 1.107-.955 1.468-2.064z"></path>
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-16 h-[1px] opacity-[20%] bg-white'></div>
        <div className='text-white py-20 text-lg font-semibold text-center'>&#169; 2022 All Rights Reserved. Mission20 Worldwide Limited.</div>
      </div>
    </>
  )
}

export default Footer