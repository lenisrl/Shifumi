document.addEventListener("DOMContentLoaded", function(){
    const pierre = document.getElementById("pierre");
    const feuille = document.getElementById("feuille");
    const ciseaux = document.getElementById("ciseaux");
    
    pierre.addEventListener("click",function(){
        jeu("Pierre");
    });
    
    feuille.addEventListener("click",function(){
        jeu("Feuille");
    });
    
    ciseaux.addEventListener("click",function(){
        jeu("Ciseaux");
    });
    
    function jeu(valeur){
        const joueur = document.getElementById("joueur");
        const robot = document.getElementById("robot");
        const resultat = document.getElementById("resultat");
    
        const choix = ["Pierre","Feuille","Ciseaux"];
        const choixRobot = choix[Math.floor(Math.random()*3)];
        if(choixRobot == valeur){
            resultat.textContent = "Egalite";
        }else if(valeur=="Pierre"){
            if(choixRobot=="Feuille"){
                resultat.textContent = "Defaite";
            }else{
                resultat.textContent = "Victoire";
            }
        }else if(valeur=="Feuille"){
            if(choixRobot=="Ciseaux"){
                resultat.textContent = "Defaite";
            }else{
                resultat.textContent = "Victoire";
            }
        }else{
            if(choixRobot=="Pierre"){
                resultat.textContent = "Defaite";
            }else{
                resultat.textContent = "Victoire";
            }
        }
        
        joueur.textContent = valeur;
        robot.textContent = choixRobot;
    };
});

