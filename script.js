$(()=>{
    
    let list =[];
    let items = [
            {    'id' :1,
                'title': 'cha-cha',
                'price': 85,
                'image': 'Cha-Cha.jpg'
            },
            {   'id' :2,
                'title' : 'chicken ransh',
                'price' : 79,
                'image' : 'Chicken-Ranch.jpg'
            },
            {    'id' :3,
                'title': 'pepperoni',
                'price' : 82,
                'image' : 'Pepperoni.jpg'
            },
            {    'id' :4,
                'title': '6-cheese',
                'price' : 89,
                'image' : '6-Cheese.jpg'
            },
            {    'id' :5,
                'title': 'margherita',
                'price' :77,
                'image' : 'Margherita.jpg'
            },
            {    'id' :6,
                'title': 'shrimp',
                'price' : 95,
                'image' : 'Shrimps.jpg'
            },
            {   'id' :7,
                'title': 'Chicken-BBQ',
                'price' : 81,
                'image' : 'Chicken-BBQ.jpg'
            },
            {    'id' :8,
                'title': 'smoky',
                'price' : 76,
                'image' : 'Smoky.jpg'
            },
            {    'id' :9,
                'title': 'Little-Italy',
                'price' : 89,
                'image' : 'Little-Italy.jpg'
            }
        ];
        let numb=1;  
        $('body').on('click', '.item button', function() {
                      
                        const btn = $(this);
                        let id=Number(btn.parent().attr('id'));
                        //console.log(id);
                       let element=list.find(o => o.id === id)
                        if(element)
                       { //console.log(element);
                       element.num=Number(element.num)+1;}
                        else
                       {let item={'id':id,
                                  'num':numb};
                                  list.push(item);
                                //  console.log(list);
                         }
                         
                         renderlist();
                        })

                        $('body').on('click', '.plus', function() {
                      
                            const btn = $(this);
                            let id=Number(btn.parent().parent().attr('value'));
                            console.log(typeof(id));
                            console.log(list);

                            let element=list.find(o => o.id === id);
                            console.log(element);
                            if(element)
                            element.num=Number(element.num)+1;
                            renderlist();
                           
                        })

                        $('body').on('click', '.minus', function() {
                      
                            const btn = $(this);
                            let id=Number(btn.parent().parent().attr('value'));
                            let element=list.find(o => o.id === id);
                            if(element)
                            element.num=Number(element.num)-1;
                            if(element.num===0)
                            // {const removeIndex = list.findIndex( item => item.id ===id);
                                // remove object
                               list.pop(element );
                              
                            
                            
                           
                            renderlist();
                           
                        })
                                            
                        
                       
                         const renderlist= ()=>{
                            
                           $('.list').find('.listadded').remove();
                           // console.log(list);
                          for(let ele of list)
                            { const container=$('.listadded.hidden').clone().removeClass('hidden');
                              
                              item_added = $(`#${ele.id}`).find('.itemadded').clone();
                       container.children('.product').append( item_added);
                        container.addClass('flex').attr('value',`${ele.id}`).appendTo('.list');
                         container.find('.num').html(ele.num);
                        let price=Number($(`#${ele.id}`).find('.price').html())*Number(ele.num);
                          
                           
                         container.children('.priceadded').html(price) 
                        
                         }
                         calctotal();
                        }
                        const calctotal=()=>{
                            let total =0;
                            let totalnum=0;
                            for(let ele of list) 
                            { let price=Number($(`#${ele.id}`).find('.price').html())*Number(ele.num);
                            total=price+total;
                            totalnum=ele.num+totalnum ;
                            
                        
                        }
                        let discount=0;
                        if(total>=300)
                        { discount=total*0.20;
                        total=total*0.8;}
                              
                       
                     $('.total').find('#num').html(totalnum);
                     $('.total').find('#total').html(total);
                     $('.total').find('#discount').html(discount);



                        }

    
        const renderItems = () => {
                        for(let item of items) {
                            const newItem = $('.item.hidden').clone();
    
                            newItem
                                .removeClass('hidden')
                                .appendTo('.menu')
                                .find('h3')
                                    .html(`${item.title}`)

                             newItem.find('.price').html(` ${item.price}`);     
                                
                            newItem
                                .find('img').attr('src',`imgs/${item.image}`)
                                newItem
                                .attr('id',`${item.id}`);
                        }
                    }
    
                    renderItems(); 
                    $(".drag").draggable({
                        revert: "invalid",
                        stack: ".drag",
                        helper: 'clone'
                    });  
                    $(".droppable").droppable({
                        accept: ".drag",
                        drop: function (event, ui) {
                            const btn= ui.draggable;
                               
                            let id=Number(btn.parent().attr('id'));
                            btn.addClass('dropped');
                            //console.log(id);
                           let element=list.find(o => o.id === id)
                            if(element)
                           { //console.log(element);
                           element.num=Number(element.num)+1;}
                            else
                           {let item={'id':id,
                                      'num':numb};
                                      list.push(item);
                                     
                             }
                             console.log(list);
                            
                             renderlist();
                            
                             
                        }
                        
                        } );        
    
    
    })
    