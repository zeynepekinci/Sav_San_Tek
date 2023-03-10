const userTxt = document.querySelector('.user-text')
const userImg = document.querySelector('.user-img')
const username = document.querySelector('.username')
const userOcp = document.querySelector('.job')

const testimonials = [
  {

    text: "Bayraktar Kızılelma, Türkiye'nin milli savunma sanayii hedefleri doğrultusunda geliştirilen bir insansız hava aracıdır. Baykar firması tarafından geliştirilen bu İHA, birçok gelişmiş özellikle donatılmıştır. Bunlar arasında:",
  },
  {
   
    text: 'Yüksek irtifalarda kullanım yeteneği: Bayraktar Kızılelma, 40.000 fit yüksekliğe kadar ulaşabilen bir uçuş kabiliyetine sahiptir.',
  },
  {

    text: "Uzun menzil: İHA, 20 saat uçuş süresine sahip olan uzun menzil kabiliyetine sahiptir.",
  },
  {

    text: "Silahlandırma kabiliyeti: Bayraktar Kızılelma, yerli geliştirilen mühimmatlarla silahlandırılabilen bir İHA'dır.",
  },
  {

    text: "Bayraktar Kızılelma, Türk savunma sanayii tarafından geliştirilen önemli bir ürün olarak kabul edilmekte ve Türkiye'nin İHA teknolojilerinde önemli bir yer edinmesine katkı sağlamaktadır. Ayrıca, Baykar firması tarafından geliştirilen bu İHA, başarısıyla dünya genelinde dikkat çekmiş ve birçok ülkenin de ilgisini çekmiştir.",
  },
  {

    text: 'Baykar, Türkiye merkezli bir savunma sanayii firmasıdır. 1984 yılında kurulan Baykar, ilk olarak model uçaklar ve otomobil yarışları için yarış arabaları üretimi yapmaktaydı. Daha sonra, 2000 li yılların başında savunma sanayii alanında çalışmalarına başladı.',
  },
  {

    text: 'Baykar, insansız hava araçları (İHA) ve insansız kara araçları (İKA) gibi alanlarda öncü bir rol oynamaktadır. Baykar, Türkiye nin milli savunma sanayii hedefleri doğrultusunda çalışmalar yapmakta ve bu alanda birçok yenilikçi ve özgün ürün geliştirmektedir.',
  },
  {

    text: 'Baykar ın geliştirdiği insansız hava araçları arasında Bayraktar TB2, Bayraktar Akıncı, Bayraktar Mini İHA gibi öne çıkan modeller bulunmaktadır. Bu İHA lar, Türk Silahlı Kuvvetleri nin yanı sıra yurt içi ve yurt dışındaki birçok farklı kullanıcı tarafından da kullanılmaktadır.',
  },
]

let idx = 1

function updateTestimonial() {
  //console.log(testimonials[1])

  const { text } = testimonials[idx]

  userTxt.innerHTML = text



  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

//updateTestimonial()

setInterval(updateTestimonial, 3500)
