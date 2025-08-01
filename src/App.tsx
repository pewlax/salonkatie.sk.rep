import React, { useEffect, useRef, useState } from 'react';
import { Scissors, Clock, Users, Sparkles, ArrowRight, MapPin, Phone, Mail, Instagram, Facebook, Star } from 'lucide-react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const serviceTabs = [
    {
      name: "Cenník - Balíky",
      services: [
        {
          category: "Výhodné balíky/komplety",
          items: [
            {
              name: "Strihanie vlasov komplet",
              description: "(mytie, maska, strih, fúkaná, styling)",
              prices: [
  { type: "", price: "od 27,00 €" }
]
              
            },
{
  name: "Farbenie vlasov komplet (bez strihu)",
  description: "(farbenie, mytie, maska, fúkaná, styling)",
  prices: [
    { type: "", price: "od 35,00 €" }
  ]
},

            {
              name: "Farbenie a strihanie vlasov komplet",
              description: "(farbenie, mytie, maska, strih, fúkaná, styling)",
              prices: [
  { type: "", price: "od 45,00 €" }
]

            },
            {
              name: "Melír",
              description: "(melír, mytie, strih, fúkaná, styling)",
              prices: [{ type: "", price: "od 60,00 €" }]
            },
            {
              name: "Melír s tónovaním",
              description: "(melír + tónovanie)",
              prices: [{ type: "", price: "od 75,00 €" }]
            }
          ]
        }
      ]
    },
    {
      name: "Cenník - Líčenie",
      services: [
        {
          category: "Líčenie",
          items: [
            {
              name: "Líčenie denné, spoločenské a svadobné",
              description: "(príprava pleti, podkladová báza, make-up, kontúrovanie, tieňovanie, jednorazové mihalnice, líčenie pier, finálna fixácia líčenia)",
              prices: [{ type: "", price: "30 €" }]
            },
            {
              name: "Mihalnice",
              description: "",
              prices: [{ type: "", price: "5 €" }]
            }
          ]
        }
      ]
    },
    {
      name: "Cenník - Obočie",
      services: [
        {
          category: "Farbenie a úprava obočia",
          items: [
            {
              name: "Farbenie a úprava obočia",
              description: "",
              prices: [{ type: "", price: "9 €" }]
            },
            {
              name: "Farbenie obočia",
              description: "",
              prices: [{ type: "", price: "5 €" }]
            },
            {
              name: "Úprava obočia",
              description: "",
              prices: [{ type: "", price: "5 €" }]
            }
          ]
        }
      ]
    },
    {
      name: "Cenník - Strihy",
      services: [
        {
          category: "Kaderníctvo - základné služby",
          items: [
            {
              name: "Detský strih",
              description: "(deti do 6 rokov)",
              prices: [{ type: "", price: "10,00 €" }]
            },
            {
              name: "Pánsky strih",
              description: "(jednoduchý, jedným nadstavcom)",
              prices: [{ type: "", price: "10,00 €" }]
            },
            {
              name: "Pánsky strih",
              description: "(zložitý)",
              prices: [{ type: "", price: "12,00 €" }]
            },
            {
              name: "Dámsky strih",
              description: "",
              prices: [{ type: "", price: "14,00 €" }]
            },
            {
              name: "Strihanie ofiny/brady",
              description: "",
              prices: [{ type: "", price: "3,00 €" }]
            },
            {
              name: "Fúkaná krátke vlasy",
              description: "",
              prices: [{ type: "", price: "10,00 €" }]
            },
            {
              name: "Fúkaná/žehlenie polodlhé vlasy",
              description: "",
              prices: [{ type: "", price: "12,00 €" }]
            },
            {
              name: "Umývanie vlasov",
              description: "(vrátane masky)",
              prices: [{ type: "", price: "3,00 €" }]
            },
            {
              name: "Sušenie",
              description: "",
              prices: [{ type: "", price: "6,00 €" }]
            },
            {
              name: "Natočenie vlasov",
              description: "(NIE ÚČES)",
              prices: [{ type: "", price: "10,00 €" }]
            },
            {
              name: "Styling",
              description: "(tužidlo/lak/lesk/vosk/krém/gél/maska)",
              prices: [{ type: "", price: "po 0,50 €" }]
            },
            {
              name: "Regeneračná kúra",
              description: "(šampón + maska + regeneračná kúra)",
              prices: [{ type: "", price: "12,00 €" }]
            }
          ]
        }
      ]
    },
    {
      name: "Cenník - Farbenie",
      services: [
        {
          category: "Farbenie vlasov",
          items: [
            {
              name: "Farbenie ¼ farby",
              description: "(15 ml)",
              prices: [{ type: "", price: "10 €" }]
            },
            {
              name: "Farbenie ½ farby",
              description: "(30 ml)",
              prices: [{ type: "", price: "18 €" }]
            },
            {
              name: "Farbenie ¾ farby",
              description: "(45 ml)",
              prices: [{ type: "", price: "20 €" }]
            },
            {
              name: "Farbenie celou farbou",
              description: "(60 ml)",
              prices: [{ type: "", price: "22 €" }]
            },
            {
              name: "Farbenie vlastnou farbou",
              description: "",
              prices: [{ type: "", price: "12 €" }]
            },
            {
              name: "Melír do 10 alobalov",
              description: "",
              prices: [{ type: "", price: "35 €" }]
            },
            {
              name: "Melír 1 dávka",
              description: "(22 g)",
              prices: [{ type: "", price: "40 €" }]
            },
            {
              name: "Melír 1,5 dávka",
              description: "(33 g)",
              prices: [{ type: "", price: "45 €" }]
            },
            {
              name: "Melír 2 dávky",
              description: "(44 g)",
              prices: [{ type: "", price: "45 €" }]
            },
            {
              name: "Balayage",
              description: "",
              prices: [{ type: "", price: "od 90 €" }]
            },
            {
              name: "Tónovanie",
              description: "",
              prices: [{ type: "", price: "od 15 €" }]
            }
          ]
        }
      ]
    },
    {
      name: "Cenník - Účesy",
      services: [
        {
          category: "Účesy",
          items: [
            {
              name: "Spoločenský účes",
              description: "",
              prices: [{ type: "", price: "25 € – 50 €" }]
            },
            {
              name: "Svadobný účes",
              description: "",
              prices: [{ type: "", price: "50 € – 60 €" }]
            },
            {
              name: "Svadobný účes skúška",
              description: "",
              prices: [{ type: "", price: "25 €" }]
            }
          ]
        }
      ]
    }
  ];

  const bookingSteps = [
    {
      step: 1,
      title: "Kontaktujte nás",
      description: "Napíšte nám správu na WhatsApp"
    },
    {
      step: 2,
      title: "Dohodnite si termín",
      description: "Navrhnite čas, ktorý vám vyhovuje"
    },
    {
      step: 3,
      title: "Rezervácia",
      description: "Termín vám potvrdíme a radi vás privítame"
    }
  ];

  const portfolioImages = [
    {
      src: "/WhatsApp Image 2025-07-25 at 19.15.37_61f3b4cf.jpg",
      label: "Farbenie + strihanie vlasov"
    },
    {
      src: "/Licenie.jpg",
      label: "Spoločenské líčenie"
    },
    {
      src: "/WhatsApp Image 2025-07-25 at 19.15.37_cd96f9d6.jpg",
      label: "Zosvetľovanie"
    },
    {
      src: "/WhatsApp Image 2025-07-28 at 16.17.14_10820cac.jpg",
      label: "Farbenie a úprava obočia"
    },
    {
      src: "/WhatsApp Image 2025-07-25 at 18.49.41_635c5d93.jpg",
      label: "Spoločenské účesy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2">
              <img src="/hlava22-2-removebg-preview_upscaled.png" alt="Salon Katie Logo" className="h-8 w-8 object-contain" />
              <span className="text-base sm:text-xl md:text-2xl font-serif font-bold text-stone-800">Salón Katie</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-8">
              <a href="#services" className="text-xs sm:text-sm md:text-base text-stone-600 hover:text-rose-400 transition-colors whitespace-nowrap">Cenník</a>
              <a href="#about" className="text-xs sm:text-sm md:text-base text-stone-600 hover:text-rose-400 transition-colors whitespace-nowrap">O nás</a>
              <a href="#portfolio" className="text-xs sm:text-sm md:text-base text-stone-600 hover:text-rose-400 transition-colors whitespace-nowrap">Portfólio</a>
              <a href="https://api.whatsapp.com/send/?phone=421908079735" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap">
                Rezervovať
              </a>
            </div>
          </div>
        </div>
      </nav>

    
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-800 leading-tight">
                Vaša krása je naša
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500"> vášeň</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-stone-600 mt-6 leading-relaxed">
V Salóne Katie sa postaráme o dámy, pánov aj deti s láskou, trpezlivosťou a profesionálnym prístupom. Vytvárame priateľské prostredie, kde sa budete cítiť pohodlne a vítaní – ako doma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="https://api.whatsapp.com/send/?phone=421908079735" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Rezervovať Termín
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full text-lg font-medium hover:border-rose-400 hover:text-rose-400 transition-all duration-300 inline-block text-center">
                  Cenník
                </a>
              </div>
            </div>
            <div className="fade-in relative">
              <div className="relative">
                <img 
                  src="/hlava22-2-removebg-preview_upscaled.png" 
                  alt="Salon Katie Logo" 
                  className="rounded-3xl shadow-2xl w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-stone-800">2493+</p>
                    <p className="text-stone-600">Spokojných klientiek</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6">
              Cenník
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
              Ponúkame kompletnú paletu služieb pre starostlivosť o vlasy s použitím 
              najkvalitnejších produktov a najmodernejších techník.
            </p>
          </div>
          
          {/* Service Tabs */}
          <div className="mt-16 fade-in">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {serviceTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-lg'
                      : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              {serviceTabs[activeTab].services.map((serviceCategory, categoryIndex) => (
                <div key={categoryIndex} className="mb-8 last:mb-0">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-800 mb-6 text-center">
                    {serviceCategory.category}
                  </h3>
                  <div className="space-y-6">
                    {serviceCategory.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-stone-100 pb-4 last:border-b-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-base sm:text-lg font-semibold text-stone-800 mb-1">
                              {item.name}
                            </h4>
                            {item.description && (
                              <p className="text-stone-600 text-xs sm:text-sm mb-2">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col gap-1 min-w-0 md:min-w-[200px]">
                            {item.prices.map((priceItem, priceIndex) => (
                              <div key={priceIndex} className="flex justify-between items-center">
                                {priceItem.type && (
                                  <span className="text-xs sm:text-sm text-stone-500 mr-2">
                                    {priceItem.type}
                                  </span>
                                )}
                                <span className="text-base sm:text-lg font-bold text-rose-500 whitespace-nowrap">
                                  {priceItem.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-8 pt-6 border-t border-stone-100">
                <a href="https://api.whatsapp.com/send/?phone=421908079735" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                  Rezervovať termín
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <img 
                src="/WhatsApp Image 2025-07-28 at 16.29.06_edb7a34d.jpg" 
                alt="Katie - Expert Hair Stylist" 
                className="rounded-3xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6">
                Vaše vlasy, vaša chvíľa
              </h2>
              <p className="text-base sm:text-lg text-stone-600 mb-6 leading-relaxed">
                Náš salón nájdete na 1. poschodí v OC Važec v Košiciach. Ponúkame kadernícke služby so zameraním na zdravie a krásu vlasov – s osobným prístupom ku každej klientke. Poradíme vám, čo je pre vaše vlasy najlepšie, a postaráme sa, aby ste odchádzali spokojná a s úsmevom.
              </p>
              <p className="text-base sm:text-lg text-stone-600 mb-8 leading-relaxed">
                Okrem kaderníctva si u nás môžete dopriať aj manikúru, modeláciu gélových nechtov, shellac a ošetrenie nechtov. Všetko pod jednou strechou, v príjemnom a uvoľnenom prostredí, kde si na chvíľu oddýchnete od zhonu a doprajete si čas pre seba.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-500 mb-2">OC Važec</p>
                  <p className="text-stone-600">1. poschodie</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-500 mb-2">Košice</p>
                  <p className="text-stone-600">Važecká 8</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-rose-400 text-rose-400" />
                ))}
                <span className="text-stone-600 ml-2">(127 hodnotení)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center fade-in mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-4">Recenzie klientiek</h2>
      <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
        Vaša spokojnosť je našou najväčšou odmenou. Prečítajte si, čo o nás hovoria naše klientky:
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 fade-in">
      {/* Review 1 */}
      <div className="bg-stone-50 p-6 rounded-3xl shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <p className="text-sm sm:text-base font-semibold text-stone-800">Zuzana Pakkala</p>
          <div className="flex space-x-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-rose-400 text-rose-400" />
            ))}
          </div>
        </div>
        <p className="text-sm sm:text-base text-stone-600">Veľmi milá a šikovná pani kaderníčka, asi prvýkrát v živote ma niekto ostrihal presne tak, ako som chcela :) 100% spokojnosť, už budem chodiť len sem.</p>
      </div>

      {/* Review 2 */}
      <div className="bg-stone-50 p-6 rounded-3xl shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <p className="text-sm sm:text-base font-semibold text-stone-800">Ludkahuska</p>
          <div className="flex space-x-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-rose-400 text-rose-400" />
            ))}
          </div>
        </div>
        <p className="text-sm sm:text-base text-stone-600">Videla som účes z vášho salónu na svadbe. A musím povedať, že v dave svadobných účesov bol top! Osobne som sa bola informovať, kde slečna bola na vlasy :)</p>
      </div>

      {/* Review 3 */}
      <div className="bg-stone-50 p-6 rounded-3xl shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <p className="text-sm sm:text-base font-semibold text-stone-800">Magdaléna Ondrášová</p>
          <div className="flex space-x-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-rose-400 text-rose-400" />
            ))}
          </div>
        </div>
        <p className="text-sm sm:text-base text-stone-600">Kaderníčka je milá pani, bola som spokojná s jej prácou.</p>
      </div>

      {/* Review 4 */}
      <div className="bg-stone-50 p-6 rounded-3xl shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <p className="text-sm sm:text-base font-semibold text-stone-800">Karol Novický</p>
          <div className="flex space-x-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-rose-400 text-rose-400" />
            ))}
          </div>
        </div>
        <p className="text-sm sm:text-base text-stone-600">Nadmieru spokojný aj s personálom 👍</p>
      </div>

      {/* Review 5 */}
      <div className="bg-stone-50 p-6 rounded-3xl shadow-sm md:col-span-2">
        <div className="flex items-center space-x-3 mb-3">
          <p className="text-sm sm:text-base font-semibold text-stone-800">Viva Elfka</p>
          <div className="flex space-x-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-rose-400 text-rose-400" />
            ))}
          </div>
        </div>
        <p className="text-sm sm:text-base text-stone-600">Krásny účes, veľmi spokojná</p>
      </div>
    </div>
  </div>
</section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6">
              Ako si rezervovať termín
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
              Rezervácia termínu je jednoduchá a rýchla. Stačia vám len 3 kroky.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="fade-in text-center relative">
                <div className="bg-gradient-to-br from-rose-400 to-pink-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-stone-800 mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{step.description}</p>
                
                {index < bookingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <a href="https://api.whatsapp.com/send/?phone=421908079735" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-12 py-4 rounded-full text-xl font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block">
                         Začať rezerváciu
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6">
              Naša práca hovorí za seba
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
              Pozrite si výber z našich najkrajších transformácií a nechajte sa inšpirovať.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {portfolioImages.map((image, index) => (
              <div key={index} className="fade-in group relative overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={image.src} 
                  alt={image.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm sm:text-base text-white font-medium">{image.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-rose-400 to-pink-500 relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="fade-in">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white mb-6">
        Pripravená na svoju transformáciu?
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
        Nezmeškajte príležitosť zažiť luxus a profesionalitu na najvyššej úrovni. 
        Rezervujte si termín ešte dnes a nechajte nás postarať sa o vašu krásu.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://api.whatsapp.com/send/?phone=421908079735"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-rose-500 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
        >
          Rezervovať termín
        </a>
        <a
          href="tel:+421908079735"
          className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-rose-500 transition-all duration-300 inline-block"
        >
          Zavolať: +421 908 079 735
        </a>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <img src="public/hlava22-2-removebg-preview.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-xl sm:text-2xl font-serif font-bold">Salón Katie</span>
        </div>
        <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6">
          Kadernícky salón v OC Važec v Košiciach, kde poskytujeme komplexnú starostlivosť o vlasy a nechty s individuálnym prístupom.
        </p>
       <div className="flex space-x-4">
  <a
    href="https://www.instagram.com/salon_katie/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-stone-800 p-3 rounded-full hover:bg-rose-400 transition-colors cursor-pointer"
  >
    <Instagram className="h-5 w-5" />
  </a>
  <a
  href="https://www.facebook.com/profile.php?id=100051458842570"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-stone-800 p-3 rounded-full hover:bg-rose-400 transition-colors cursor-pointer"
>
  <Facebook className="h-5 w-5" />
</a>
</div>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-serif font-bold mb-6">Kontakt</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-rose-400" />
            <span className="text-sm sm:text-base text-stone-300">Važecká 8, OC Važec, 1. poschodie, Košice</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-rose-400" />
            <span className="text-sm sm:text-base text-stone-300">0940 800 861</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-rose-400" />
            <span className="text-sm sm:text-base text-stone-300">salonkatie1@gmail.com</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-serif font-bold mb-6">Otváracie hodiny</h3>
        <div className="space-y-2 text-sm sm:text-base text-stone-300">
          <p>Pondelok – Piatok: 9:00 – 18:00</p>
          <p>Sobota: 9:00 – 13:00</p>
          <p>Nedeľa: Zatvorené</p>
        </div>
      </div>
    </div>

    <div className="border-t border-stone-800 mt-12 pt-8 text-center">
      <p className="text-sm sm:text-base text-stone-400">
        © 2025 Salón Katie. Všetky práva vyhradené.
      </p>
    </div>
  </div>
      </footer>
    </div>
  );
}

export default App;