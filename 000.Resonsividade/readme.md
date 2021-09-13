# Responsividade
## CSS Units

Unidade de medidas do CSS

..max-height/widh: 0px;

*Height: %, vh;
*Width: %, vw;

-Layout Fixo
    `px` - Pixels

-Layout Fluido
    `%` - Porcentagem
    `auto` - Automática
    `vh` - Viewport Height
    `vw` - Viewport Width

-Textos fixos 
    `1px` = 0.75pt (word)
    `16px` = 12pt (word)

-Texto fluidos
    `em` - multiplicado pelo pai
    `rem` - multiplicado pelo root <---
    [font-size, line-height]

*, html {
    font-size: 50%;
}

- Utilizar Breakpoints no F12
    -meta viewport(width=device-width)

- Utilizar media queries

    default = > 768, 630, 540, 320

    @media (max-width: 768px){
        *, html{
            font-size: 40%;
        }
        .container{
            flex-direction: column;
        }
        .container .item{
            order: -1;
        }
        .formgrou {
            display: block;
        }
    }
    @media (max-width: 560px){



    }

- Sem media queries 👌
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap 20px;
