"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { useState } from "react"

export default function Home() {
  const [rsvpResponse, setRsvpResponse] = useState<'initial' | 'yes' | 'no'>('initial')
  const [formData, setFormData] = useState({
    name: '',
    numberOfPersons: '',
    song: ''
  })

  const resetDialog = () => {
    setRsvpResponse('initial')
    setFormData({ name: '', numberOfPersons: '', song: '' })
  }

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your submission logic here

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-full h-screen  md:max-w-5xl mx-auto aspect-[3/4] overflow-hidden">
        <div className="absolute bg-[#fee5cf] w-full h-screen  md:inset-0 "></div>
        <div className="absolute  inset-0  bg-[url('/images/carton.svg')] bg-cover bg-center bg-no-repeat "></div>
        <div className="absolute inset-0 bg-[url('/images/flori.svg')] bg-cover bg-center bg-no-repeat">
        {/* mask */}
        {/* <div className="absolute inset-0 bg-[#fff4de] flower-clip md:hidden"></div> */}
        </div>

        <div className="absolute text-center flex flex-col w-full h-screen uppercase">
          <div className="h-screen text-black flex flex-col justify-around items-center py-12">
            <div className="flex-1 flex flex-col justify-end">
              <p className="text-lg md:text-3xl font-light">Ne face placere sa va invitam  <br /> la sarbatoarea iubirii noastre</p>
              <h1 className="text-4xl md:text-8xl font-medium text-gray-800 mb-4 mt-8">
                Laura & <br/> Robert
              </h1>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
            <div className="w-full md:w-xl h-0.5 bg-[#cfa987] mx-auto mb-9" />
              <p className="text-xl md:text-3xl">Alaturi de nasii nostri</p>
              <h2 className="text-3xl md:text-5xl">Oana & Ionut</h2>
              <p className="mt-10 mb-2 font-bold text-2xl md:text-3xl">17 mai 2025</p>
            <div className="w-full md:w-xl  h-0.5 bg-[#cfa987] mx-auto mt-9" />
            </div>
            
            
            <div className="flex-1 flex flex-col justify-start items-center">
              <p className="text-xl md:text-3xl">Ceremonia Religioasa | 3 PM</p>
              <p className="text-xl md:text-3xl">Petrecerea | 4:30 PM</p>
              <p >
                <button className='mt-2 px-6 py-2 border-2 border-black text-lg font-medium transition' >
              <a href="https://maps.app.goo.gl/q4gStLihkbVpJ6kM7" target='_blank' className="text-xl font-bold"> Daimon Events, Bucuresti ←</a>
            </button>
              </p>
              <Dialog onOpenChange={(open) => !open && resetDialog()}>
                <DialogTrigger className="mt-6 py-2 border-2 px-0 w-7/8  border-black rounded-full text-lg font-medium transition">
                  RSVP
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {rsvpResponse === 'no' ? 'Multumim pentru raspuns' : 'Dansam impreuna in mai?'}
                    </DialogTitle>
                    <DialogDescription className="mt-4">
                      {rsvpResponse === 'no' 
                        ? 'Ne pare rau ca nu puteti participa, va multumim pentru raspuns'
                        : 'Ne dorim ca toata lumea sa se simta confortabil si sa se bucure de aceasta zi speciala alaturi de noi.'
                      }
                    </DialogDescription>
                  </DialogHeader>
                  
                  {rsvpResponse === 'initial' && (
                    <div className="flex gap-4 mt-6">
                      <button 
                        onClick={() => setRsvpResponse('yes')}
                        className="flex-1 px-6 py-2 border-2 border-black rounded-full text-lg font-medium transition hover:bg-black hover:text-white"
                      >
                        Da
                      </button>
                      <button 
                        onClick={() => setRsvpResponse('no')}
                        className="flex-1 px-6 py-2 border-2 border-black rounded-full text-lg font-medium transition hover:bg-black hover:text-white"
                      >
                        Nu
                      </button>
                    </div>
                  )}

                  {rsvpResponse === 'yes' && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Nume</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                          placeholder="Numele dvs."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Numarul de persoane</label>
                        <input
                          type="number"
                          value={formData.numberOfPersons}
                          onChange={(e) => setFormData({...formData, numberOfPersons: e.target.value})}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                          placeholder="ex. 2"
                          min="1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Melodie preferata</label>
                        <input
                          type="text"
                          value={formData.song}
                          onChange={(e) => setFormData({...formData, song: e.target.value})}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                          placeholder="Melodia pe care ati dori sa o ascultati"
                        />
                      </div>
                      <DialogClose asChild>
                      <button 
                        onClick={handleSubmit}
                        className="w-full mt-4 px-6 py-2 border-2 border-black rounded-full text-lg font-medium transition hover:bg-black hover:text-white"
                      >
                        Trimite
                      </button>
                      </DialogClose>
                    </div>
                  )}
                </DialogContent>
                </Dialog>
              {/* <button className="mt-10 px-6 py-2 border-2 border-black rounded-full text-lg font-medium transition">
                RSVP
              </button> */}
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}
