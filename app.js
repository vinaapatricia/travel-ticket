
        var form = document.getElementById("form-pemesanan");
        var nama = document.getElementById("nama");
        var tujuan = document.getElementById("tujuan");
        var harga = document.getElementById("harga");
        var jumlah = document.getElementById("jumlah");
        var member = document.getElementById("member");
        var diskon = document.getElementById("diskon");
        var submit = document.getElementById("submit");
        var hasil = document.getElementById("hasil");
    
        // harga tiket dr tujuan 
        if (tujuan.value) {
            harga.value = hargaTiket[tujuan.value];
        }
        
        // calc tujuan
        tujuan.addEventListener("change", function() {
            var pilihan = tujuan.value; // pilihan dr tujuan
            if (pilihan) {
            harga.value = hargaTiket[pilihan]; // harganya sesuai dr tujuan
            } else {
            harga.value = ""; // null
            }
        });
  
        var hargaTiket = {
          "Semarang": 350000,
          "Jakarta": 500000,
          "Bandung": 300000,
          "Surabaya": 700000,
          "Yogyakarta": 400000,
          "Bali": 1000000
        };
    
        var hitungDiskon = function(harga, member) {
          var diskon = 0;
          if (member.checked) {
            diskon = harga * 0.1; // mmber disc 10%
          }
          return diskon;
        };
    
        var hitungTotal = function(harga, jumlah, diskon) {
          var total = (harga * jumlah) - diskon;
          return total;
        };
    
        var tampilkanHasil = function(nama, tujuan, harga, jumlah, diskon, total) {
          var teks = "<p>Terima kasih, " + nama + ", telah memesan tiket travel ke " + tujuan + ".</p>";
          teks += "<p>Detail pesanan Anda adalah sebagai berikut:</p>";
          teks += "<ul>";
          teks += "<li>Harga Tiket: Rp. " + harga.toLocaleString() + "</li>";
          teks += "<li>Jumlah Tiket: " + jumlah + "</li>";
          teks += "<li>Diskon: Rp. " + diskon.toLocaleString() + "</li>";
          teks += "<li>Total Bayar: Rp. " + total.toLocaleString() + "</li>";
          teks += "</ul>";
          teks += "<p>Mohon bayar sebesar " + total.toLocaleString() + ". Lakukan pembayaran sebelum tanggal yang ditentukan.</p>";
          teks += "<p>Selamat menikmati perjalanan Anda.</p>";
    
          hasil.innerHTML = teks;
        };
    
        tujuan.addEventListener("change", function() {
          var pilihan = tujuan.value; 
          if (pilihan) {
            harga.value = hargaTiket[pilihan];
          } else {
            harga.value = ""; 
          }
        });
    
        // member disc
        member.addEventListener("change", function() {
          var hrg = Number(harga.value); 
          if (hrg) {
            diskon.value = hitungDiskon(hrg, member); 
          } else {
            diskon.value = ""; 
          }
        });
    
        form.addEventListener("submit", function(event) {
          event.preventDefault();
    
          // value ke tipe data
          var nm = nama.value;
          var tjn = tujuan.value;
          var hrg = Number(harga.value);
          var jml = Number(jumlah.value);
          var dskn = Number(diskon.value);
    
          var ttl = hitungTotal(hrg, jml, dskn);
    
          tampilkanHasil(nm, tjn, hrg, jml, dskn, ttl);
    
        });