
import './App.css';
const data = [
  {
    title: "FREE",
    price: ["$0", "/month"],
    user: [true, "Single User"],
    storage: [true, "5GB Storage"],
    publicProjects: [true, "Unlimited Public Projects"],
    comunityAccess: [true, "Community Access"],
    privateProjects: [false, "Unlimited Private Projects"],
    phoneSupport: [false, "Dedicated Phone Support"],
    subdomain: [false, "Free Subdomain"],
    statusReport: [false, "Monthly Status Report"]

  },
  {
    title: "PLUS",
    price: ["$9", "/month"],
    user: [true, "Single User"],
    storage: [true, "5GB Storage"],
    publicProjects: [true, "Unlimited Public Projects"],
    comunityAccess: [true, "Community Access"],
    privateProjects: [true, "Unlimited Private Projects"],
    phoneSupport: [true, "Dedicated Phone Support"],
    subdomain: [true, "Free Subdomain"],
    statusReport: [false, "Monthly Status Report"]

  },
  {
    title: "PRO",
    price: ["$49", "/month"],
    user: [true, "Single User"],
    storage: [true, "5GB Storage"],
    publicProjects: [true, "Unlimited Public Projects"],
    comunityAccess: [true, "Community Access"],
    privateProjects: [true, "Unlimited Private Projects"],
    phoneSupport: [true, "Dedicated Phone Support"],
    subdomain: [true, "Free Subdomain"],
    statusReport: [true, "Monthly Status Report"]

  }
]

function App() {
  const price = data

  return (
    <div className="App">
        <section class="pricing py-5">
        <div class="container">
        <div class="row">
      {price.map((ter) =>
        <Pricekart data={ter} />
      )
      }
      </div>
      </div>
      </section>
    </div>
  );
}

export default App;

function Pricekart({ data }) {

  return (
  
     
       
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{data.title}</h5>
                <h6 class="card-price text-center">{data.price[0]}<span class="period">{data.price[1]}</span></h6>
                <hr />
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>{data.user[1]}</li>
                  <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>{data.storage[1]}</li>
                  <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>{data.publicProjects[1]}</li>
                  <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>{data.comunityAccess[1]}</li>
                  <li class={!data.privateProjects[0] ? "text-muted" : ""}><span class="fa-li"><i class={!data.privateProjects[0] ? "fas fa-times" : "fa-solid fa-check"}></i></span>{data.privateProjects[1]}</li>
                  <li class={!data.phoneSupport[0] ? "text-muted" : ""}><span class="fa-li"><i class={!data.phoneSupport[0] ? "fas fa-times" : "fa-solid fa-check"}></i></span>{data.phoneSupport[1]}</li>
                  <li class={!data.subdomain[0] ? "text-muted" : ""}><span class="fa-li"><i class={!data.subdomain[0] ? "fas fa-times" : "fa-solid fa-check"}></i></span>{data.subdomain[1]}</li>
                  <li class={!data.statusReport[0] ? "text-muted" : ""}><span class="fa-li"><i class={!data.statusReport[0] ? "fas fa-times" : "fa-solid fa-check"}></i></span>{data.statusReport[1]}</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
  
      
 
  )

}


