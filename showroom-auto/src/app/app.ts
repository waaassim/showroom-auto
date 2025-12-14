import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { HeadBar } from './components/head-bar/head-bar';
import { SearchBar } from './components/search-bar/search-bar';
import { AutoDetails } from './components/auto-details/auto-details';
import { Auto } from './interfaces/auto';

@Component({
  selector: 'app-root',
  imports: [NgIf, HeadBar, SearchBar, AutoDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('showroom-auto');

  selectedAuto:Auto|null=null
  selectedBrand: string = ''

  selectAuto(auto:Auto){
    this.selectedAuto=auto
    console.table(this.selectedAuto)
  }

  clearSelection(){
    this.selectedAuto=null
  }

  get brands(): string[] {
    return Array.from(new Set(this.autoList.map(a => a.brand))).sort();
  }

  autoList:Auto[]= [
    {id:1,brand:"Mercedes Benz",model:"C-CLASS",price:230,power:9,photo:"CLASS-C.webp",availability:4,description:"Compact executive sedan with refined interiors, digital cockpit, and efficient mild-hybrid options."},
    {id:2,brand:"Mercedes Benz",model:"GLA",price:203,power:8,photo:"GLA.webp",availability:4,description:"Compact luxury crossover with modern driver aids, elevated ride height and premium cabin finishes."},
    {id:3,brand:"Mercedes Benz",model:"GLE",price:450,power:17,photo:"GLE.webp",availability:4,description:"Mid-size luxury SUV pairing comfort and performance — available in hybrid and AMG trims."},
    {id:4,brand:"Jaguar",model:"F-Pace",price:399,power:16,photo:"FPACE.webp",availability:4,description:"Sporty luxury SUV with sharp handling and a driver-focused interior (Pivi Pro infotainment)."},
    {id:5,brand:"Jaguar",model:"E-Pace",price:350,power:12,photo:"EPACE.webp",availability:4,description:"Compact crossover delivering agility, tech features and personalization options."},
    {id:6,brand:"Audi",model:"Q3 CROSSBACK",price:230,power:9,photo:"Q3.webp",availability:3,description:"Stylish compact SUV with coupé silhouette, advanced infotainment and a refined interior."},
    {id:7,brand:"Audi",model:"Q5",price:350,power:16,photo:"Q5.webp",availability:3,description:"Versatile luxury SUV with quattro drive, efficient powertrains and premium cabin."},
    {id:8,brand:"Audi",model:"A3 SPORTBACK",price:145,power:8,photo:"A3.webp",availability:3,description:"Compact premium hatchback with modern tech and sporty handling."},
    {id:9,brand:"BMW",model:"X2 SDRIVE PACK",price:245,power:8,photo:"X2.webp",availability:3,description:"Sporty compact crossover with M Sport styling and nimble dynamics."},
    {id:10,brand:"BMW",model:"IX",price:432,power:11,photo:"IX.webp",availability:3,description:"Flagship electric SUV offering long range, futuristic design and high-tech cabin."},
    {id:11,brand:"BMW",model:"X3 HYBRIDE",price:355,power:11,photo:"X3.webp",availability:3,description:"Practical plug-in hybrid SUV balancing efficiency and family-friendly space."},
    {id:12,brand:"Land Rover",model:"Range Rover Evoque",price:340,power:9,photo:"EVOQUE.webp",availability:4,description:"Compact Range Rover with premium materials, modern tech and city/country versatility."},
    {id:13,brand:"Land Rover",model:"Defender 90",price:398,power:21,photo:"DEFENDER.webp",availability:4,description:"Rugged compact off-roader with modern comforts and serious capability."},
    {id:14,brand:"Land Rover",model:"Range Rover",price:702,power:24,photo:"RANGE.webp",availability:4,description:"Luxury flagship SUV with outstanding comfort, off-road capability and bespoke options."},
    {id:15,brand:"Alfa Romeo",model:"Stelvio",price:268,power:18,photo:"STELVIO.webp",availability:11,description:"Italian performance SUV with sharp handling and distinctive styling."},
    {id:16,brand:"Alfa Romeo",model:"Giulia",price:198,power:18,photo:"GIULIA.webp",availability:11,description:"Sporty executive sedan delivering driver engagement and Italian design."},
    {id:17,brand:"Ford",model:"Mustang",price:210,power:20,photo:"mustang.jpg",availability:6,description:"Iconic American sports coupe — muscular V8 character or modern EcoBoost efficiency."},
    {id:18,brand:"Porsche",model:"911 Carrera",price:980,power:30,photo:"911.avif",availability:2,description:"Legendary rear-engined sports car combining precision handling, heritage and track-capable performance."},
    {id:19,brand:"Ford",model:"Explorer",price:120,power:14,photo:"EXPLORER.jpg",availability:5,description:"Family-oriented SUV with flexible seating, modern safety tech and capable powertrains."},
    {id:20,brand:"Porsche",model:"Cayman",price:650,power:26,photo:"cayman.avif",availability:2,description:"Mid-engined sports coupe focused on pure driving dynamics and precise handling."},
    {id:21,brand:"Tesla",model:"Model S",price:420,power:28,photo:"modes -s.jpg",availability:3,description:"High-performance electric sedan with long range, instant torque and advanced autopilot features."},
    {id:22,brand:"Tesla",model:"Model 3",price:210,power:18,photo:"model 3.jpg",availability:8,description:"Compact executive electric sedan offering great efficiency, tech-forward cabin and strong value."},
    {id:23,brand:"Lexus",model:"RX",price:330,power:13,photo:"lexus -RX.jpg",availability:4,description:"Luxury crossover emphasizing comfort, refinement and hybrid options for efficiency."},
    {id:24,brand:"Honda",model:"Civic",price:85,power:6,photo:"civic.png",availability:12,description:"Reliable compact car with efficient engines, modern infotainment and a reputation for longevity."},
    {id:25,brand:"Ford",model:"F-150",price:140,power:16,photo:"ford-f-150.jpg",availability:7,description:"Versatile full-size pickup offering strong towing, multiple powertrains including hybrid options."},
    {id:26,brand:"Porsche",model:"911 GT3",price:820,power:32,photo:"porshe 911 gt3.jpg",availability:2,description:"Track-focused 911 with high-revving engine, aerodynamic upgrades and precision handling."},
    {id:27,brand:"Porsche",model:"Taycan Turbo",price:540,power:28,photo:"taycan turbo s.jpg",availability:3,description:"High-performance electric grand tourer blending instant torque with refined cabin and fast charging."},
    {id:28,brand:"Ford",model:"Bronco",price:95,power:14,photo:"Ford Bronco.jpg",availability:5,description:"Retro-styled off-road SUV with modern 4x4 capability and removable roof options for adventure."},
    {id:29,brand:"Ferrari",model:"F8 Tributo",price:620,power:34,photo:"F8 Tributo.jpg",availability:1,description:"Mid-engine V8 supercar delivering explosive performance and pure driving engagement."},
    {id:30,brand:"Ferrari",model:"SF90 Stradale",price:800,power:48,photo:"SF90 STRADABLE.jpg",availability:1,description:"Plug-in hybrid V8 with electric boost — a hybrid supercar blending performance and innovation."},
    {id:31,brand:"Bugatti",model:"Chiron",price:3600,power:150,photo:"BUGATTI CHIRON.jpg",availability:1,description:"Hypercar engineering pushing extreme speed, handcrafted luxury and prodigious power."},
    {id:32,brand:"Lamborghini",model:"Huracán",price:300,power:40,photo:"LAMBORGHINI-HURACAN.svg",availability:2,description:"V10-powered supercar with sharp styling, intense soundtrack and razor-sharp dynamics."},
    {id:33,brand:"McLaren",model:"720S",price:285,power:45,photo:"720s.avif",availability:2,description:"Lightweight carbon chassis supercar focused on exhilarating performance and razor response."}
  ];

}
