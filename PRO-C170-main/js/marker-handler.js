AFRAME.registerComponent("marker-handler", {
    init: function(){
        this.el.addEventListener("markerFound", ()=>{
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost", ()=>{
            this.handleMarkerLost();
        });
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var summaryButton = document.getElementById("summaryButton");
        var orderButton = document.getElementById("orderButton");

        summaryButton.addEventListener("click", ()=>{
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Order Summary is not Available"
            });
        });

        orderButton.addEventListener("click", ()=>{
            swal({
                icon:"https://wikiclipart.com/wp-content/uploads/2017/06/Truck-black-and-white-semi-truck-clipart-black-and-white-free.jpg",
                title:"Order Coming",
                text:"Toy is being Delivered"
            });
        })
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    },
    getToys: async function(){
        return await firebase.firestore().collection("toys").get().then(snap=>{
            return snap.docs.map(doc=> doc.data());
        });
    }
});