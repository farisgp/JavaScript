let Gempa = document.getElementById('Gempa');
let no = 1;
class gempa{
    constructor(lokasi, skala){
        this.lokasi =lokasi;
        this.skala = skala;
    }

    dampakGempa() {
        if(this.skala >= 0 && this.skala <= 2) this.dampak = 'Tidak Terasa';
        else if(this.skala > 2 && this.skala <= 4) this.dampak = 'Bangunan Retak-retak';
        else if(this.skala > 4 && this.skala <= 6) this.dampak = 'Bangunan Roboh';
        else if(this.skala > 6) this.dampak = 'Bangunan Roboh dan Berpotensi Tsunami';
        else this.skala = '';
        return this.dampak;
          
    }
    infoGempa(){
        Gempa.innerHTML += `
        <tr>
            <td>${no++}</td>
            <td>${this.lokasi}</td>
            <td>${this.skala}</td>
            <td>${this.dampakGempa()}</td>
        </tr>
        `;
    }
}

const g1 = new gempa('Aceh', 7.5);
g1.infoGempa();
const g2 = new gempa('Banten', 6);
g2.infoGempa();
const g3 = new gempa('Kebumen', 2);
g3.infoGempa();
const g4 = new gempa('Bogor', 4.6);
g4.infoGempa();
const g5 = new gempa('Surakarta', 3.7);
g5.infoGempa();
const g6 = new gempa('Padang', 1.8);
g6.infoGempa();
const g7 = new gempa('Manado', 4.2);
g7.infoGempa();
const g8 = new gempa('Nusa Tenggara', 2.7);
g8.infoGempa();
const g9 = new gempa('Bali', 5.4);
g9.infoGempa();
const g10 = new gempa('Semarang', 3.6);
g10.infoGempa();