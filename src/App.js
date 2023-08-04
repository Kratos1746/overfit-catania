
import './index.css';
import './App.css'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';




class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '3737477594', // Stato per il numero di telefono
    };
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.callNow = this.callNow.bind(this);
  }

  handlePhoneChange(value) {
    this.setState({
      phoneNumber: value,
    });
  }

  callNow() {
    const { phoneNumber } = this.state;
    if (phoneNumber) {
      const formattedPhoneNumber = encodeURIComponent(phoneNumber);
      window.open(`tel:${formattedPhoneNumber}`, '_blank');
    }
  }
  openGoogleMaps() {
    const destination = 'Over Fit, Via Mongibello, Catania, CT'; // Inserisci qui l'indirizzo o le coordinate della tua destinazione
    const encodedDestination = encodeURIComponent(destination);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`, '_blank');
  }

  render() {

    return (
      <div
        id="section1"
        className="grid grid-rows-3 w-[90%] px-8 md:px-12 h-screen m-auto xl:max-w-none bg-right max-[1024px]:min-h-[1200px] z-[0]"
        style={{
          backgroundImage: `url('/images/back.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          width: '100%',
        }}
      >
     

        <div
          className="flex justify-center items-center lg:justify-start z-10  ">
          <img src="/images/logob.png" alt="Logo" className="w-2/3 lg:w-1/3 mt-12 animate-dasopra" />
        </div>
        <div className="flex flex-col justify-start items-left z-10 ">
        <div className="flex mb-8 items-center justify-center  lg:absolute lg:rotate-90 lg:right-[-5%] xl:right-[-3.5%] 2xl:right-[-3%] lg:top-[15%] lg:mr-0 lg:bg-black lg:bg-opacity-50 lg:p-8 lg:border-t-4 border-red-700  ">
              <a href="https://www.facebook.com/overfitcentrofitness/" className="text-white mr-4   ">
              <img src="/images/lface.png" alt="Immagine" className="w-[33px] md:w-[40px] lg:w-[45px] hover:scale-125 ease-in duration-150 lg:-rotate-90 " />
              </a>
              <a href="https://www.instagram.com/over.fit_/" className="text-white mr-4">
              <img src="/images/instagram.png" alt="Immagine" className=" w-[55px] md:w-[70px]  lg:w-[80px] hover:scale-125 ease-in duration-150 lg:-rotate-90 " />
              </a>
              <a href="https://www.tiktok.com/@overfitcatania" className="text-white">
              <img src="/images/tiktok.png" alt="Immagine" className="w-[30px] md:w-9 lg:w-[44px] hover:scale-125 ease-in duration-150 lg:-rotate-90  " />
              </a>
            </div>
          <h2 className="text-white text-center lg:text-left text-2xl leading-tight md:text-[40px] lg:text-[40px] 2xl:text-[52px] font-bold uppercase  animate-dasopra delay-100">{this.props.title}<span className='text-red-700'>benessere</span></h2>
          <p className="text-white text-center lg:text-left text-xs md:text-base lg:text-xl 2xl:text-2xl mt-4 uppercase  lg:max-w-[700px] animate-appari">{this.props.subtitle} e sempre affiancato da un trainer</p>
        </div>
        <img src="/images/BAN.png" alt="Immagine 1" className="w-full min-[500px]:top-[50%] min-[600px]:top-[45%] sm:top-[50%] md:w-[80%] md:top-[60%] min-[860px]:top-[55%] min-[950px]:top-[45%] lg:w-[650px] lg:top-[60%] xl:w-[700px] 2xl:w-[900px] absolute left-[-.2%] top-[60%] z-10  animate-dasinistra " />
        
        <div className="flex mt-28 sm:mt-48 justify-center lg:justify-start  z-10 animate-appari">
        <div className="h-[8%] absolute max-[375px]:bottom-[8%] max-[375px]:left-[8%] max-[450px]:bottom-[8%]  max-[500px]:bottom-[14%] max-[550px]:bottom-[18%] max-[600px]:bottom-[20%] max-[641px]:bottom-[23%] max-[450px]:left-[9%]  max-[500px]:left-[16%] max-[550px]:left-[18%] left-[23%] max-[700px]:bottom-[4%] max-[700px]:left-[22%] max-[768px]:bottom-[8%] max-[850px]:bottom-[10%] max-[920px]:bottom-[12%] max-[1024px]:bottom-[15%] min-[768px]:left-[10%] min-[820px]:left-[13%] min-[900px]:left-[15%] min-[1000px]:left-[17%] min-[1024px]:bottom-[1%]   min-[1024px]:left-[2%]  min-[1340px]:left-[1%]  min-[1450px]:left-[1%] min-[1400px]:bottom-[2%]  min-[1600px]:bottom-[4%]  border border-red-700 border-t-2 border-l-2 "></div>
        <div className="w-[16%] absolute max-[375px]:bottom-[8%] max-[375px]:left-[8%] max-[450px]:bottom-[8%]   max-[500px]:bottom-[14%] max-[550px]:bottom-[18%] max-[600px]:bottom-[20%] max-[641px]:bottom-[23%] max-[450px]:left-[9%]  max-[500px]:left-[16%] max-[550px]:left-[18%] left-[23%] max-[700px]:bottom-[4%] max-[700px]:left-[22%] max-[768px]:bottom-[8%] max-[850px]:bottom-[10%] max-[920px]:bottom-[12%] max-[1024px]:bottom-[15%] min-[768px]:left-[10%] min-[820px]:left-[13%] min-[900px]:left-[15%] min-[1000px]:left-[17%] min-[1024px]:bottom-[1%]    min-[1024px]:left-[2%]  min-[1340px]:left-[1%] min-[1450px]:left-[1%] min-[1400px]:bottom-[2%] min-[1600px]:bottom-[4%]  border border-red-700 border-b-2 border-l-2 "></div>
        <div className="h-[8%] absolute max-[375px]:bottom-[8%] max-[375px]:left-[50%]  max-[450px]:bottom-[8%]   max-[500px]:bottom-[14%] max-[550px]:bottom-[18%] max-[600px]:bottom-[20%] max-[641px]:bottom-[23%] max-[450px]:left-[50%]  max-[500px]:left-[50%] max-[550px]:left-[50%] left-[50%] max-[700px]:bottom-[4%] max-[700px]:left-[50%] max-[768px]:bottom-[8%] max-[850px]:bottom-[10%] max-[920px]:bottom-[12%] max-[1024px]:bottom-[15%] min-[768px]:left-[50%] min-[820px]:left-[50%] min-[900px]:left-[50%] min-[1000px]:left-[50%] min-[1024px]:bottom-[1%]    min-[1024px]:left-[35%] min-[1145px]:left-[30%] min-[1340px]:left-[28%] min-[1450px]:left-[23%]   min-[1600px]:left-[20%] min-[1400px]:bottom-[2%] min-[1600px]:bottom-[4%] border border-gray-600 border-t-2 border-l-2 "></div>
        <div className="w-[16%] absolute  max-[375px]:bottom-[8%] max-[375px]:left-[50%] max-[450px]:bottom-[8%]   max-[500px]:bottom-[14%] max-[550px]:bottom-[18%] max-[600px]:bottom-[20%] max-[641px]:bottom-[23%] max-[450px]:left-[50%]  max-[500px]:left-[50%] max-[550px]:left-[50%] left-[50%] max-[700px]:bottom-[4%] max-[700px]:left-[50%] max-[768px]:bottom-[8%] max-[850px]:bottom-[10%] max-[920px]:bottom-[12%] max-[1024px]:bottom-[15%] min-[768px]:left-[50%] min-[820px]:left-[50%] min-[900px]:left-[50%] min-[1000px]:left-[50%] min-[1024px]:bottom-[1%]   min-[1024px]:left-[35%] min-[1145px]:left-[30%] min-[1340px]:left-[28%] min-[1450px]:left-[23%]  min-[1600px]:left-[20%] min-[1400px]:bottom-[2%] min-[1600px]:bottom-[4%]   border border-gray-600 border-b-2 border-l-2 "></div>
    
        
          <button className="bg-white hover:bg-red-700 hover:text-white hover:scale-105 ease-out duration-150 text-gray-600 font-bold text-sm px-5 max-w-[135px] h-[70px] md:whitespace-nowrap w-72 border-2 border-red-700 md:max-w-[260px] md:text-base lg:text-lg lg:max-w-xs" onClick={this.openGoogleMaps}>
            INDICAZIONI STRADALI
          
          </button> 
         
          <button className="bg-white text-red-700 hover:bg-gray-700 hover:text-white hover:scale-105 ease-out duration-150 font-bold text-sm px-5 ml-6 sm:ml-16 max-w-[135px] h-[70px] md:whitespace-nowrap w-72 border-2 border-gray-800 md:max-w-[260px] md:text-base lg:text-lg lg:max-w-xs" onClick={this.callNow}>
            CHIAMA ORA
           
          </button>
        </div>
        <a href="https://api.whatsapp.com/send?phone=3737477594&text=" target="_blank">
  <button class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 fixed bottom-10 right-6 z-30 hover:scale-125 ease-in duration-150 ">
    <img src="/images/124034.png" alt="WhatsApp Icon" class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md border-2 border-white shadow-md shadow-black"/>
  </button>
</a>
        <img src="/images/persone2.png" alt="Persone 2" className=" max-h-[698px] max-w-[794px] lg:w-2/4 w-full sm:w-2/3 relative lg:absolute bottom-0 2xl:bottom-[0px] sm:left-[15%] lg:left-[50%] z-0 " />
        
        </div>
      
    );
  }
}







class Section3 extends React.Component {
  render() {
    return (
      <div id="section3" className="grid grid-cols-1 md:grid-cols-2 w-[90%] px-12  max-h-[1080px] border-black m-auto flex-1 z-10">
        <div className="md:flex items-center md:items-start md:flex-col h-fit mt-14 md:h-auto lg:justify-center z-10">
          <h2 className="text-center md:text-start md:text-4xl md:leading-[45px] font-bold uppercase mx-auto lg:text-[40px] lg:leading-[50px] xl:text-[45px] xl:leading-[65px]">
            Che tu voglia <span className='text-red-700 font-semibold'>mantenerti</span> in forma.<br />
            Che tu voglia <span className='text-red-700 font-semibold'>liberare</span> la tua mente.<br />
            Che tu voglia <span className='text-red-700 font-semibold'>raggiungere</span> il tuo fisico ideale, Over Fit è il luogo ideale per te.
          </h2>
          <p className="text-black text-center md:text-start md:text-xl lg:text-2xl mt-8 mb-11">{this.props.subtitle}</p>
        </div>
        <div className="flex justify-center items-center md:ml-10 relative max-h-[1000px] z-10">
          <div className="bg-gray-600 bg-opacity-30 h-2/3 p-4 z-10">
            <div className="h-[8%] absolute bottom-[13%] left-[8%] md:bottom-[14%] md:left-[-3%] lg:left-[10%] 2xl:bottom-[14%] 2xl:left-[14%] border border-red-700 border-t-2 border-l-2 animate-bounce-horizontal-reverse"></div>
            <div className="w-[8%] absolute top-[13%] right-[8%] md:top-[14%] md:right-[-3%] lg:right-[10%] 2xl:top-[14%] 2xl:right-[14%] border border-red-700 border-t-2 border-r-2 animate-bounce-horizontal"></div>
            <div className="w-[8%] absolute bottom-[13%] left-[8%] md:bottom-[14%] md:left-[-3%] lg:left-[10%] 2xl:bottom-[14%] 2xl:left-[14%] border border-red-700 border-b-2 border-l-2 animate-bounce-horizontal-reverse"></div>
            <div className="h-[8%] absolute top-[13%] right-[8%] md:top-[14%] md:right-[-3%] lg:right-[10%] 2xl:top-[14%] 2xl:right-[14%] border border-red-700 border-b-2 border-r-2 animate-bounce-horizontal"></div>
            <video className="w-full h-full" controls poster='/images/copertina.png'>
              <source src="/video/video edit.mp4" type="video/mp4" />
              {/* Fallback message for non-supporting browsers */}
              Il tuo browser non supporta il video.
            </video>
          </div>
        </div>
      </div>
    );
  }
}




class Section4 extends React.Component {
  render() {
    return (
      <div id="section4" className="flex flex-col items-center w-[90%] px-12 md:h-screen border-y border-black m-auto flex-1">
        <div className="flex flex-col items-center mb-6">
          <h2 className=" text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-24 uppercase animate-dasopra">{this.props.title}</h2>
          
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-800 font-medium text-base lg:text-lg xl:text-[21px] mt-20 mb-14 max-w-5xl">
              Partiamo da un punto. Le schede che troviamo online funzionano davvero?<br /><br />
              Si. <br /><br />
              Significa che dovresti utilizzarle?<br /><br />
              <span className='text-[22px] lg:text-[27px] text-black'>
              <span className=' text-red-700 font-semibold'>No</span>. Soprattutto se sei alle prime armi con la palestra.<br /><br /></span>
              Il bisogno primario di ogni allievo è di avere un <span className=' text-red-700 font-semibold'>programma di allenamento</span> personale. Non tutti sono propensi ad acquisire rapidamente massa muscolare. Non tutti sono propensi a perdere rapidamente peso. Non tutti sono propensi ad un certo tipo di allenamento.<br /><br />
              Hai bisogno di capire qual è il tuo <span className=' text-red-700 font-semibold'>obiettivo</span>. E su quello creiamo il percorso più <span className=' text-red-700 font-semibold'>adatto a te</span>.<br /><br />
              <span className='text-[22px] lg:text-[27px] text-black'> Soprattutto, non essere seguito potrebbe comportare inutili e <span className=' text-red-700 font-semibold'>dolorosi infortuni</span> causati da errata un'esecuzione dell’esercizio.</span><br /><br />Ecco perché seguiamo costantemente i nostri allievi durante il loro allenamento.<br />
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/rosbn.png" alt="Persone 2" className="lg:min-w-[450px] " />
          </div>
        </div>
      </div>
    );
  }
}


class Section5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScreenLessThan1024px: window.innerWidth < 1024,
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ isScreenLessThan1024px: window.innerWidth < 1024 });
  }

  render() {
    const isScreenLessThan1024px = window.innerWidth < 1024;
    const CustomArrow = ({ onClick, direction }) => (
      <button
        onClick={onClick}
        style={{
          position: 'absolute',
         
          zIndex: 1,
          borderRadius:'10%',
          border: '2px solid black',
          cursor: 'pointer',
          outline: 'none',
          boxShadow: '2px 1px 2px rgba(0,0,0,0.9)',
          left: direction === 'prev' ? '2px' : 'auto',
          right: direction === 'next' ? '2px' : 'auto',
        }}
        className={`${direction === 'prev' ? 'prev-arrow' : 'next-arrow'}  top-[45%] sm:w-[50px] sm:h-[80px]  w-6 h-12 sm:text-[32px] text-[20px] text-red-700 font-semibold hover:text-white hover:bg-red-700 hover:scale-110 ease-in duration-100 `}
      >
        {direction === 'prev' ? '<' : '>'}
      </button>
    );

    const indicatorStyles = {
      background: 'black', // Change this to the desired color (e.g., 'black')
      width: '10px', // Change the size as needed
      height: '10px', // Change the size as needed
      margin: '0 8px', // Adjust the spacing between indicators
      borderRadius: '50%', // This will make them round
    };

    return (
      <div
        id="section5"
        className="flex flex-col items-center w-[90%] px-12 md:h-screen border-y border-black m-auto flex-1"
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold mt-24 uppercase animate-dasopra">
          {this.props.title}
        </h2>
        <p className="text-gray-800 font-medium text-base lg:text-lg xl:text-xl mt-20 mb-14">
          
<span className='text-[22px] lg:text-[27px] text-black'>Lavoriamo ogni giorno per creare il <span className=' text-red-700 font-semibold'>miglior ambiente</span> per il tuo allenamento.</span><br></br><br></br>

Teniamo molto al rispetto delle regole, così da tutelare <span className=' text-red-700 font-semibold'>te</span> e tutti gli altri allievi della palestra. <br></br><br></br>

Per allenarti dovrai sempre avere:<br></br><br></br>
<span className=' text-red-700 font-semibold'>●</span>	Asciugamano per utilizzare i macchinari<br></br>
<span className=' text-red-700 font-semibold'>●</span>	Delle scarpe da utilizzare solo in palestra<br></br>
<span className=' text-red-700 font-semibold'>●</span>	L’accortezza di disinfettare i macchinari utilizzati con i prodotti a disposizione<br></br><br></br>

<span className='text-[22px] lg:text-[27px] text-black'>Che tu sia un ragazzo giovane o una persona molto impegnata, sappiamo quanto l’allenamento sia importante per la <span className=' text-red-700 font-semibold'>salute</span> fisica e mentale.</span><br></br><br></br>

Per questo motivo abbiamo pensato alla promozione<br></br>

        </p>
        <div className='flex flex-col justify-left items-left relative left-[-.2%] xl:left-0  w-screen mb-10 '>
        <img src="/images/BAN.png" alt="Immagine 1" className="  w-full min-[550px]:top-[45%] sm:top-[50%] md:w-[90%] md:top-[55%] min-[860px]:top-[50%] min-[950px]:top-[45%] lg:w-[850px] lg:top-[55%] xl:w-[1000px] 2xl:w-[1200px]  left-[-.2%] top-[55%] z-10  " />
</div>
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold uppercase animate-dasopra">
          {this.props.subtitle}
        </h2>

        {isScreenLessThan1024px ? (
          <Carousel
            axis="horizontal"
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <CustomArrow
                  onClick={onClickHandler}
                  direction="prev"
                  aria-label={label}
                />
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <CustomArrow
                  onClick={onClickHandler}
                  direction="next"
                  aria-label={label}
                />
              )
            }
            indicatorStyle={indicatorStyles} // Pass the indicator styles
          
          >
             <div className='flex flex-row justify-center items-center mt-16 mb-16'>
              <video className="max-[375px]:w-[150px] w-[175px] sm:w-[280px] h-auto m-3 border-[5px] border-black shadow-xl shadow-gray-700 " controls>
                <source src="/video/rec1.mp4" type="video/mp4" />
                {/* Fallback message for non-supporting browsers */}
                Il tuo browser non supporta il video.
              </video>
            </div>
            <div className='flex flex-row justify-center items-center mt-16 mb-16'>
              <video className="max-[375px]:w-[150px] w-[175px] sm:w-[280px] h-auto m-3 border-[5px] border-black shadow-xl shadow-gray-700 " controls>
                <source src="/video/rec2.mp4" type="video/mp4" />
                {/* Fallback message for non-supporting browsers */}
                Il tuo browser non supporta il video.
              </video>
            </div>
            <div className='flex flex-row justify-center items-center mt-16 mb-16'>
              <video className="max-[375px]:w-[150px] w-[175px] sm:w-[280px] h-auto m-3 border-[5px] border-black shadow-xl shadow-gray-700 " controls>
                <source src="/video/rec3.mp4" type="video/mp4" />
                {/* Fallback message for non-supporting browsers */}
                Il tuo browser non supporta il video.
              </video>
            </div>
            <div className='flex flex-row justify-center items-center mt-16 mb-16'>
              <video className="max-[375px]:w-[150px] w-[175px] sm:w-[280px] h-auto m-3 border-[5px] border-black shadow-xl shadow-gray-700 " controls>
                <source src="/video/rec4.mp4" type="video/mp4" />
                {/* Fallback message for non-supporting browsers */}
                Il tuo browser non supporta il video.
              </video>
            </div>
          </Carousel>
        ) : (
          <div className="flex flex-row justify-center items-center mt-16 mb-16">
            <video className="w-1/4 xl:w-[22%] h-auto m-3 border-[5px] border-black shadow-xl shadow-gray-700  " controls>
              <source src="/video/rec1.mp4" type="video/mp4" />
              {/* Fallback message for non-supporting browsers */}
              Il tuo browser non supporta il video.
            </video>
            <video className="w-1/4 xl:w-[22%] h-auto m-3 border-[5px] border-black shadow-xl shadow-gray-700 " controls>
              <source src="/video/rec2.mp4" type="video/mp4" />
              {/* Fallback message for non-supporting browsers */}
              Il tuo browser non supporta il video.
            </video>
            <video className="w-1/4 xl:w-[22%] h-auto m-3 border-[5px] border-black shadow-xl shadow-gray-700 " controls>
              <source src="/video/rec3.mp4" type="video/mp4" />
              {/* Fallback message for non-supporting browsers */}
              Il tuo browser non supporta il video.
            </video>
            <video className="w-1/4 xl:w-[22%] h-auto m-3 border-[5px] border-black shadow-xl shadow-gray-700 " controls>
              <source src="/video/rec4.mp4" type="video/mp4" />
              {/* Fallback message for non-supporting browsers */}
              Il tuo browser non supporta il video.
            </video>
          </div>
        )}
      </div>
    );
  }
}




class Section6 extends React.Component {
  render() {
    return (
      <div id="section6" className="flex flex-col items-center w-[90%] px-12 md:h-screen min-h-[600px] justify-center  border-y border-black m-auto flex-1 bg-right"
      style={{
        backgroundImage: `url('/images/sfondo ros.jpg')`,
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: '100%',
        
      }}>
        <h2 className=" text-white text-xl md:text-2xl lg:text-4xl xl:text-5xl text-center font-bold mt-24 uppercase animate-dasopra">{this.props.title}</h2>
        <p className="text-white font-medium text-base lg:text-lg xl:text-xl mt-20 mb-14">
        
        Ho sempre dedicato tutta la mia vita al mondo della palestra. Tanto da rendere la mia passione nel mio lavoro.<br></br><br></br>

        Ho partecipato anche a gare di bodybuilding, tra cui mi sono qualificato nella TOP 5 tra i IFBB (International Federation of Bodybuilding & Fitness).<br></br><br></br>

        Metto tutte le mie conoscenze per aiutarti a raggiungere i tuoi obiettivi. Tu dovrai dare sempre tutto te stesso: costanza, sacrificio e dedizione massima. 
        <br></br>
        
        </p>
    </div>
    );
  }
}

class Section7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '3737477594', // Stato per il numero di telefono
    };
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.callNow = this.callNow.bind(this);
  }

  handlePhoneChange(value) {
    this.setState({
      phoneNumber: value,
    });
  }

  callNow() {
    const { phoneNumber } = this.state;
    if (phoneNumber) {
      const formattedPhoneNumber = encodeURIComponent(phoneNumber);
      window.open(`tel:${formattedPhoneNumber}`, '_blank');
    }
  }
  openGoogleMaps() {
    const destination = 'Over Fit, Via Mongibello, Catania, CT'; // Inserisci qui l'indirizzo o le coordinate della tua destinazione
    const encodedDestination = encodeURIComponent(destination);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`, '_blank');
  }
  render() {
    return (
      <div id="section7" className="flex flex-col items-center w-[100%] px-12 md:h-screen min-h-[800px] mb-12  flex-1">
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold mt-24 uppercase animate-dasopra">
          {this.props.title}
        </h2>
        <div className="flex justify-center items-center z-1 w-full">
  <img
    src="/images/disros.png"
    alt="Immagine 1"
    className="w-full max-[500px]:h-[130px] max-[500px]:border-y-4 h-[160px] sm:h-[200px] md:h-[265px] lg:h-[300px] xl:h-[375px] 2xl:h-[400px] border-y-8 border-black mt-12"
  />
  <img
    src="/images/banner obb1.jpg"
    alt="Immagine 2"
    className="w-full  max-[500px]:h-[130px] max-[500px]:border-y-4 h-[160px] sm:h-[200px] md:h-[265px] lg:h-[300px] xl:h-[375px] 2xl:h-[400px] mt-12 border-y-8 border-black"
  />
  <img
    src="/images/disgri.png"
    alt="Immagine 3"
    className="w-full  max-[500px]:h-[130px] max-[500px]:border-y-4 h-[160px] sm:h-[200px] md:h-[265px] lg:h-[300px] xl:h-[375px] 2xl:h-[400px] border-y-8 border-black mt-12"
  />
</div>

        <p className="text-gray-800 text-center lg:max-w-[66%] font-medium text-base lg:text-lg xl:text-[22px] mt-20 mb-14">
          Se stai cercando una palestra a Catania per liberare la tua mente, per tenerti in forma o per ottenere il tuo
          fisico ideale, Over Fit ti accompagnerà in ogni step della tua crescita, mettendo sempre a disposizione i
          migliori servizi e attrezzature.
        </p>
        <div className="flex mt-12 justify-center lg:justify-start relative mb-20 z-10">
  <div className="h-[100%] absolute bottom-[-25%] left-[51%] sm:left-[55%] md:left-[52%] border border-gray-600 border-t-2 border-l-2"></div>
  <div className="w-[33%] absolute bottom-[-25%] left-[-3%]  border border-red-700 border-b-2 border-l-2"></div>
  <div className="h-[100%] absolute bottom-[-25%] right-[103%]  border border-red-700 border-t-2 border-r-2"></div>
  <div className="w-[33%] absolute  bottom-[-25%] left-[51%] sm:left-[55%] md:left-[52%]  border border-gray-600 border-b-2 border-r-2"></div>

  <button className="bg-white hover:bg-red-700 hover:text-white hover:scale-105 ease-out duration-150 text-gray-600 font-bold text-sm px-5 max-w-[135px] h-[70px] md:whitespace-nowrap w-72 border-2 border-red-700 md:max-w-[260px] md:text-base lg:text-lg lg:max-w-xs" onClick={this.openGoogleMaps}>
            INDICAZIONI STRADALI
          
          </button> 
         
          <button className="bg-white text-red-700 hover:bg-gray-700 hover:text-white hover:scale-105 ease-out duration-150 font-bold text-sm px-5 ml-6 sm:ml-16 max-w-[135px] h-[70px] md:whitespace-nowrap w-72 border-2 border-gray-800 md:max-w-[260px] md:text-base lg:text-lg lg:max-w-xs" onClick={this.callNow}>
            CHIAMA ORA
           
          </button>
        </div>
      </div>
    );
  }
}

class Section8 extends React.Component {
  render() {
    return (
      <div id="section8" className="flex flex-col justify-center items-center w-full max-h-[400px]  flex-1 bg-left z-30"
      style={{
        backgroundImage: `url('/images/sfondo.png')`,
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: '100%',
        
      }}>
        <div className="flex flex-row justify-center items-center w-full max-h-[350px] ">
          {/* Colonna sinistra */}
          <div className="flex flex-col items-left pl-4">
            <p className="text-red-700 font-semibold text-[8px] sm:text-xs lg:text-sm">Numero di telefono</p>
            <p className="text-white mb-4 text-[8px] sm:text-xs lg:text-sm">373 747 7594</p>
            <p className="text-red-700 font-semibold text-[8px] sm:text-xs lg:text-sm">Indirizzo</p>
            <p className="text-white text-[8px] sm:text-xs xl:text-sm">Via Mongibello, 53<br></br>95123 Catania CT Italia</p>
          </div>
          {/* Colonna centrale */}
          <div className="flex flex-col items-center p-12 lg:pl-0 sm:m-16 lg:m-40">
            <img src="/images/logob.png" alt="Immagine" className="w-[150px] lg:w-[250px] items-start " />
            <div className="flex mt-4 items-center">
              <a href="https://www.facebook.com/overfitcentrofitness/" className="text-white mr-4 ">
              <img src="/images/lface.png" alt="Immagine" className="w-[33px] md:w-[40px] lg:w-[45px] hover:scale-125 ease-in duration-150 " />
              </a>
              <a href="https://www.instagram.com/over.fit_/" className="text-white mr-4">
              <img src="/images/instagram.png" alt="Immagine" className=" w-[55px] md:w-[70px] lg:w-[80px] hover:scale-125 ease-in duration-150  " />
              </a>
              <a href="https://www.tiktok.com/@overfitcatania" className="text-white">
              <img src="/images/tiktok.png" alt="Immagine" className="w-[30px] md:w-9 lg:w-[44px] hover:scale-125 ease-in duration-150  " />
              </a>
            </div>
          </div>
          {/* Colonna destra */}
          <div className="flex flex-col  p-4 mt-6">
          <p className="text-white text-[8px] sm:text-xs xl:text-sm te"><span className=' font-semibold'>Orari:</span><br></br></p>
            <p className="text-white text-[8px] sm:text-xs xl:text-sm"><span className=' text-red-700 font-semibold'>Lunedì</span>:<br></br>    9:00 - 22:00</p>
            <p className="text-white text-[8px] sm:text-xs xl:text-sm"> <span className=' text-red-700 font-semibold'>Martedì</span>:<br></br>   16:30 - 21:30</p>
            <p className="text-white text-[8px] sm:text-xs xl:text-sm"> <span className=' text-red-700 font-semibold'>Mercoledì</span>:<br></br> 9:00 - 22:00</p>
            <p className="text-white text-[8px] sm:text-xs xl:text-sm"> <span className=' text-red-700 font-semibold'>Giovedì</span>:<br></br>   16:30 - 21:30</p>
            <p className="text-white text-[8px] sm:text-xs xl:text-sm"> <span className=' text-red-700 font-semibold'>Venerdì</span>:<br></br>  9:00 - 22:00</p>
            <p className="text-white text-[8px] sm:text-xs xl:text-sm"> <span className=' text-red-700 font-semibold'>Sabato</span>:<br></br>   Chiuso</p>
            <p className="text-white text-[8px] sm:text-xs xl:text-sm"> <span className=' text-red-700 font-semibold'>Domenica</span>:<br></br> Chiuso</p>
          </div>  
        </div><p className='text-white text-center text-[6px] sm:text-[8px] lg:text-xs mt-3 mb-6 relative min-[425px]:left-4'>© Copyright 2023 Overfit Fitness Center. All rights reserved. Powered by SDTCOPYSALES</p>
      </div>
    );
  }
}






class App extends React.Component {
  render() {
    return (
      <div className="flex flex-col bg-slate-50 min-h-screen h-full scroll-smooth overflow-hidden font-body justify-center md:mx-auto">
        <Section1 id="section1" title="La palestra per il tuo " subtitle="Allenati in uno spazio ben attrezzato " />
        <Section3 id="section3" subtitle="Qui, tutti noi ci alleniamo insieme per poter raggiungere gli obiettivi prefissati" />
        <Section4 id="section4" title="Perché affidarsi ad un trainer piuttosto che seguire schede di allenamento su internet?" subtitle="STAFF" />
        <Section5 id="section5" title="Over Fit è la tua palestra a Catania." subtitle="Ecco alcuni allievi di Over Fit" />
        <Section6 id="section6" title="Sono Rosario Bonaccorsi, proprietario e trainer di Over Fit." subtitle="Ecco alcuni allievi di Over Fit" />
        <Section7 id="section7" title="I nostri obiettivi sono" />
        <Section8 id="section8"/>
      </div>
    );
  }
}

export default App;
