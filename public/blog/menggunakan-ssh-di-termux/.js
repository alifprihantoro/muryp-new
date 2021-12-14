const content = `
<ol>
<li>Buat folder <strong>.ssh</strong> jika tidak ada, lalu masuk dan buat key</li>
</ol>
<pre tabindex="0"><code>$ mkdir .ssh
$ cd ~/.ssh/
$ ssh-keygen -t rsa -C &quot;yourmail@domain.com&quot; -b 4096
</code></pre><p>exam :</p>
<pre tabindex="0"><code>ssh-keygen -t rsa -C &quot;alifmuryp@gmail.com-b 409696
Generating public/private rsa key pair.
Enter file in which to save the key (/data/data/com.termux/files/home/.ssh/id_rsa): github
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in github
Your public key has been saved in github.pub
The key fingerprint is:
SHA256:Sr1U/dm1jDiuxixtsyE+PebMECXQyTuuWmrjhYtIscI alifmuryp@gmail.com
The key's randomart image is:
+---[RSA 4096]----+
|     .o .        |
|      .+   .     |
|       .... .   .|
|       +o.  ..ooo|
| .    o.S  o .oo.|
|. o .. +... .    |
|.E . ooo*. .     |
|+ .o=..o=@o      |
|..o=o  .B*+      |
+----[SHA256]-----+
</code></pre><h2 id="tambah-ssh-key">tambah ssh key</h2>
<pre tabindex="0"><code>ssh-add ~/.ssh/id_rsa 
</code></pre><p>jika error dengan pesan :</p>
<pre tabindex="0"><code>ssh-add ~/.ssh/github
Could not open a connection to your authentication agent.
</code></pre><p>gunakan :</p>
<pre tabindex="0"><code>$ eval &quot;$(ssh-agent -s)&quot;
Agent pid 59566
</code></pre><h2 id="lalu-tambah-lagi">lalu tambah lagi</h2>
<pre tabindex="0"><code>$ ssh-add ~/.ssh/id_rsa
Identity added: /data/data/com.termux/files/home/.ssh/your_id (yourmail@domain.com)
</code></pre><h2 id="copy-publick-key-ke-githubgitlab">copy publick key ke github/gitlab</h2>
<ol>
<li>copy code dengan cara <code>cat your_id.pub</code></li>
<li>copy kode tersebut di github/gitlab, pada menu setting ada menu ssh</li>
<li>tambah ssh</li>
<li>pastekan disitu</li>
<li>kembali ke comand line</li>
</ol>
<h2 id="lalu-cek-apakah-sudah-terhubung">Lalu cek apakah sudah terhubung</h2>
<pre tabindex="0"><code>ssh -T git@gitlab.com 
</code></pre><blockquote>
<p>jika ada yang belum paham atau ada kesalahan silanhkan kunjungi refrensi dibawah.</p>
</blockquote>
<p>source :</p>
<ul>
<li>mytrashcode.com/open-connection-authentication-agent</li>
<li>petanikode.com/gitlab-ssh/</li>
</ul>

`
