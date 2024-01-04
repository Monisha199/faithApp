import './App.css';
import data from './data.json';


function App() {
  const content = data;
  return (
    <div>
      <div style={{backgroundImage:`url("https://cdn.wionews.com/sites/default/files/inline-images/Nityanand%20Charan%20Das.jpg")`,boxSizing:"border-box",backgroundRepeat:"no-repeat",height:"400px", backgroundSize:"cover",paddingTop:"250px",paddingLeft:"50px"}}>
        {/* <img src="https://cdn.wionews.com/sites/default/files/inline-images/Nityanand%20Charan%20Das.jpg"/> */}
        <div style={{width:"500px"}}>
        <span style={{color:"gray",fontSize:"20px"}}>{content.instructor.name}<br/></span>
        <span style={{fontSize:"30px"}}>{content.course.title}</span>
        </div>
      </div>
      <div style={{backgroundColor:"#F2EBF8",width:"400px",padding:"10px",position:"absolute",left:"65%",top:"47%"}}>
            <span >Course fees</span><br/><img  style={{height:"20px"}}src="https://cdn-icons-png.flaticon.com/128/846/846194.png" alt="rupees"/>
            <span style={{fontSize:"40px",marginTop:"30px"}}>{content.course.fee.amount}<br/></span><br/>
            <span style={{fontWeight:"bold"}}>What's included:</span><br/>
            <ul>
              
                <img alt="video" style={{height:"20px",marginRight:"10px",verticalAlign:"middle"}} src="https://cdn-icons-png.flaticon.com/128/10065/10065116.png"/>{content.course.inclusions.on_demand_videos} on-demand videos<br/>
                <img alt="video" style={{height:"20px",marginRight:"10px",verticalAlign:"middle"}} src="https://cdn-icons-png.flaticon.com/128/10065/10065116.png"/>2 livestream sessions<br/>
                <img alt="video" style={{height:"20px",marginRight:"10px",verticalAlign:"middle"}} src="https://cdn-icons-png.flaticon.com/128/12633/12633920.png"/>Live Q&A sessions with Nityanand Charan Das<br/>
                <img alt="video" style={{height:"20px",marginRight:"10px",verticalAlign:"middle"}} src="https://cdn-icons-png.flaticon.com/128/12633/12633920.png"/>An active whatsapp_community
                {content.course.inclusions.whatsapp_community}
              
              
            </ul>
            <div style={{borderRadius:"20px",backgroundColor:"#8727C7",width:"150px",height:"35px", textAlign:"center",paddingTop:"10px",margin:"auto",color:"white"}}>Register Today</div><br/>
            


          </div><br/>
      <div style={{paddingLeft:"50px", marginTop:"5px"}}>
        <div style={{paddingLeft:"40px", display:"inline-block", borderBottom:"3px solid #8727C7", paddingBottom:"20px",width:"100px"}}><span>ABOUT</span></div>
        <div style={{paddingLeft:"100px", display:"inline"}}></div><span>INSTRUCTOR</span>
        <div style={{paddingLeft:"100px", display:"inline"}}></div>
        <span>REVIEWS</span>
          
        <div style={{marginTop:"20px"}}>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>About the course</span>
            <p>
              <span dangerouslySetInnerHTML={{__html:content.course.about.html_content}} />
            </p>
            
            <span style={{fontWeight:"bold",fontSize:"20px"}}>What to expect from the course</span>
            <p>
              <span dangerouslySetInnerHTML={{__html:content.course.what_to_expect.html_content}} />
            </p>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>Key topics covered</span>
            <p>
              <span dangerouslySetInnerHTML={{__html:content.course.key_topics.html_content}} />
            </p>
          </div>
          
          <div><br/>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>About the Instructor</span><br/><br/>
            <img alt="author" style={{borderRadius:"50%",width:"150px",height:"120px", textAlign:"center",paddingTop:"10px",marginLeft:"20px"}} src="https://monkspeak.com/assets/img/team/Nityanand-Charan-Das.jpg"/>
            <p style={{display:"inline-block",verticalAlign:"top",marginLeft:"50px"}}>
              <span dangerouslySetInnerHTML={{__html:content.about_instructor.html_content}} />
            </p><br/><br/><br/>
            <img alt="fb" style={{height:"20px",marginRight:"10px",marginLeft:"300px",verticalAlign:"middle"}}src="https://cdn-icons-png.flaticon.com/128/733/733547.png"/>Facebook
            <img alt="twi" style={{height:"20px",marginRight:"10px",marginLeft:"120px",verticalAlign:"middle"}}src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png"/>Twitter
            <img alt="yt" style={{height:"20px",marginRight:"10px",marginLeft:"120px",verticalAlign:"middle"}}src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"/>Youtube
            <img alt="video" style={{height:"20px",marginRight:"10px",marginLeft:"120px",verticalAlign:"middle"}}src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"/>Instagram
            
          </div>

        </div>
        <div style={{paddingLeft:"30px",backgroundColor:"#E4E4E6",marginTop:"40px"}}><br/><br/>
          <div style={{width:"500px",margin:"auto"}}>
          <span style={{fontSize:"20px",fontWeight:"bold"}}>{content.testimonial.text}</span><br/><br/> <br/>
          <img alt="fb"style={{height:"30px",marginRight:"10px",marginLeft:"120px",verticalAlign:"middle"}} src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"/>
          {content.testimonial.reviewer_name}<br/>
          <span style={{marginLeft:"160px"}}>{content.testimonial.reviewer_designation}</span><br/>
          </div><br/>
        </div>
    </div>
  );
}

export default App;
