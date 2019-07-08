var game = {
    words:["poison","alert","refrigerator","absolute","indefinite","monitor","javascript","university","django","banana","generation","desktop","computer","probability","stalin"],
    victories: 0,
    defeats:0,
    yourletter:[],
    chances:10,
    unknown:[],
    
    comp_choise:function(){
        this.chances = 10
        this.yourletter=[]
        this.unknown=[]
        let random_number =  Math.floor(Math.random()*this.words.length)
        
        return this.words[random_number]  
    },

    line_generator:function(soz){
        for( let i=0;i<soz.length;i++){
           this.unknown.push("_") 
        } 
    },

    check_letter:function(letter,soz){
       
        if(soz.indexOf(letter)===-1){
            this.chances--
        }
        else{
            for(let i=0; i<soz.length; i++){
                if(letter === soz[i]){
                    this.unknown[i] = letter
                    
                }
                
            }
            if(this.unknown.indexOf('_')===-1){
               
                return true;
            }
        }
    },


    print_result:function(){
        document.querySelector(".victories").innerHTML=this.victories
        document.querySelector(".defeats").innerHTML=this.defeats
        document.querySelector(".chances").innerHTML=this.chances
        

    }

}
let comp_chosen = game.comp_choise()
console.log(comp_chosen)
game.line_generator(comp_chosen)



for( let i=0; i<game.unknown.length; i++){
    document.querySelector(".word").innerHTML += game.unknown[i]+" "
}

game.print_result()
console.log(comp_chosen)
document.onkeydown = function(e){
    let my_choise = e.key
    let yoxla=game.check_letter(my_choise,comp_chosen)
    if(yoxla){
        game.victories++
        document.querySelector(".your_letter").innerHTML =''
        comp_chosen = game.comp_choise()
        game.line_generator(comp_chosen)

    }else{
        document.querySelector(".your_letter").innerHTML+=my_choise+", " 
        document.querySelector(".word").innerHTML = ""
        if(game.unknown.indexOf('_')!==-1){
            for( let i=0; i<game.unknown.length; i++)
            {
                document.querySelector(".word").innerHTML += game.unknown[i]+" "
            }
            if(game.chances == 0){
                game.defeats++
                
                document.querySelector(".result").innerHTML = "You lost! Computer choise was " + comp_chosen
                document.querySelector(".your_letter").innerHTML =''
                comp_chosen = game.comp_choise()
                game.line_generator(comp_chosen)
                
            }
        }
    }
    
   
    game.print_result()
}