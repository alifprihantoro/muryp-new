const content = `
<p>Hello world!
Disini saya tidak akan membahas terlalu dalam mengenai ssh. Saya ahanya akan memberikan gambaran bagi kalian yang belum sama sekali tahu apa itu ssh.</p>
<h1 id="membahas-mengenai-ssh-dan-contoh-penggunaannya">Membahas Mengenai SSH dan Contoh Penggunaannya</h1>
<h2 id="penjelasan">Penjelasan</h2>
<p>Secara singkat padat dan jelas. SSH itu adalah kunci yang biasa digunakan di server, untuk me-remote jarak jauh.</p>
<p>Ketika kita membuat <strong>SSH</strong> key kita akan mendapat dua buah file, yaitu publick key dan privat key. Privat key biasanya ditandai dengan akhiran <strong>.pub</strong> sedangkan publick key <strong>tidak</strong>.</p>
<p>Ibarat pintu, <strong>privat key</strong> adalah kunci sedangkan <strong>publick key</strong> adalah lubang kunci. Keduanya harus cocok satu sama lain. Dan seperti kunci pada umumnya privat key tidak boleh kita berikan kepada siapapun. Jika sampai itu terjadi orang yang memiliki privat key bisa saja membobol server anda.</p>
<p>Oh ya, soal keamanannya sendiri. SSH memiliki cara kerja yang unik dimana server dan client akan bertukar key. Apakah keduanya cocok atau tidak. Dan saat bertukar tersebut, jaringan kita harus dipastikan aman, jika tidak <strong>SSH</strong> tidak akan bekerja atau bisa dibilang akan memutus jaringan karena tidak aman. Berbeda dengan <strong>enkripsi</strong>, SSH tidak bisa di <strong>denkryp</strong> dan SSH sendiri memiliki cara unik untuk mengenerate key.</p>
<h2 id="penggunaan-ssh">Penggunaan SSH</h2>
<p>Vontoh penggunaan ssh yang sering saya gunakan ialah saat mengunggah atau push repo di git dan gitlab. Agar tidak selalu memasukkan terus username dan pasword. Dan untuk jaga-jaga, saya mengganti ssh secara berkala. Untuk cara penggunaannya silahkan klick <a href="menghubungkan-hugo-dengan-git" 
    
 
    target="_blank"
    rel="nofollow"
    
    >disini</a>
. Penggunaan ssh ini sangat membantu saya, karena dengn ssh saya bisa menghemat waktu yang lumayan. Terlebih lagi saya menggunakan hp untuk coding.</p>
<h2 id="kesimpulannya">kesimpulannya</h2>
<p>Jadi kesimpulannya, ssh itu bisa dibilang sangat aman untuk berinteraksi dengan server. Meskipun begitu kita tetap harus waspada. Kita tak tahu apa yang akan terjadi nantinya. Karena sebaik software pasti akan ada celahnya.</p>
<p>Dan saran saja, untuk ssh sebaiknya kita harus menggantinya berkala dan terus meng update. Dan ssh satu denga lainnya jangan sama. Ditambah lagi penggunaan komputer atau hp harus tidaklah jorok. Jika bisa komputer atau hp yang berisi ssh, dipisahkan. Atau jika hanya punya satu saja, jangan sembarang mengunjungi situs mencurigakan.</p>
<p>Selain ssh, saya nantinya kemungkinan akan membahas sedikit mengenai keamanan web dan cara lebih aman berinternet.</p>
<h2 id="pendapat-anda">Pendapat Anda</h2>
<p>Apakah kamu sudah mencoba menggunakan ssh? Jika ya, digunakan untuk apa? Apakah menurutmu ssh itu aman? Apa yang menyebabkan kalian menggunakan ssh? apakah tutorial diatas ribet atau membantu?</p>
<p>Ikuti terus perkembangan blog ini dengan follow akun media social saya @alifmuryp (IG/FB/Twitter). Dan terimakasih telah mengunjungi blog sederhana saya. Jika ada saran dan kritiknya atau pertanyaan silahkan tulis di kolom komentar dibawah.</p>

`
