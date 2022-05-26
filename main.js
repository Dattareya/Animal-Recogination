//https://teachablemachine.withgoogle.com/models/oiQX0WASj/

function startclassify()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oiQX0WASj/model.json",modelready);
}
function modelready()
{
    classifier.classify(gotresults);
}
function gotresults(error,results)
{
    if(error){console.error(error);}else{
        console.log(results);
        document.getElementById("result_label").innerHTML="I Can Hear "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+" %";

        img1=document.getElementById("Horse");
        img2=document.getElementById("dog");
        img3=document.getElementById("crow");
        img4=document.getElementById("lion");

        if(results[0].label=="Horse"){
            img1.src="horse.gif";
            img2.src="Dog.jpeg";
            img3.src="Lion.png";
            img4.src="Crow.jpeg";
        }else if(results[0].label=="Dog"){
            img1.src="Horse.jpeg";
            img2.src="DOG.GIF";
            img3.src="Lion.png";
            img4.src="Crow.jpeg";
        }else if(results[0].label=="Lion"){
            img1.src="Horse.jpeg";
            img2.src="Dog.jpeg";
            img3.src="Lion.gif";
            img4.src="Crow.jpeg";
        }
    
    }

}
