const content = `
<blockquote>
<p>ini masih dalam pengerjaan dan masih acak</p>
</blockquote>
<h2 id="pembuatan-tema-hugo-dan-catatan-lainnya">Pembuatan Tema Hugo dan Catatan Lainnya</h2>
<h3 id="bassic">Bassic</h3>
<ul>
<li><code>pkg update &amp;&amp; pkg upgrade &amp;&amp; pkg install hugo</code> : install</li>
<li><code>hugo new site &lt;nameSite&gt;</code> : membuat situs baru</li>
<li><code>hugo new &lt;slug&gt;</code> : membuat konten</li>
<li><code>hugo new theme &lt;nameTheme&gt;</code> : membuat tema</li>
<li><code>hugo</code> : membuat file public tanpa konvert</li>
<li><code>hugo --minify</code> : membuat file public dengan konvert</li>
<li><code>hugo serve</code> : membuat server hugo tanpa konvert</li>
<li><code>hugo serve --minify</code> : membuat server hugo dengan konvert</li>
<li><code>hugo new site &lt;nameSite&gt;</code> : membuat situs baru</li>
<li><code>hugo new &lt;slug&gt;</code> : membuat konten</li>
<li><code>hugo new theme &lt;nameTheme&gt;</code> : membuat tema</li>
</ul>
<h3 id="managging-conten">Managging Conten</h3>
<ul>
<li>Menggunakan Vim/NVim
Untuk Menggunakan VIM sendiri, pastikan kalian sudah familiar dengan perintah yang ada di vim. Lalu kalian install aja hugo helper dan kalian bisa lihat beberapa kode yang saya buat di repo <a href="" 
    
 
    target="_blank"
    rel="nofollow"
    
    >disini</a>
</li>
<li>Menggunakan CMS</li>
</ul>
<h3 id="membuat-tema">Membuat Tema</h3>
<ul>
<li>html5</li>
<li>sass</li>
<li>partial</li>
<li>script</li>
<li>if else</li>
<li>params</li>
<li>related</li>
<li>nav</li>
<li>footer</li>
<li>disqus</li>
<li>pwa</li>
<li>rss/xml</li>
<li>lazy img</li>
<li>pages</li>
<li>uotput</li>
<li>config</li>
<li>shortcode</li>
<li>open close</li>
<li>json</li>
</ul>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-json" data-lang="json">[{<span style="color:#960050;background-color:#1e0010">{</span> <span style="color:#960050;background-color:#1e0010">range</span> <span style="color:#960050;background-color:#1e0010">$index,</span> <span style="color:#960050;background-color:#1e0010">$page</span> <span style="color:#960050;background-color:#1e0010">:=</span> <span style="color:#960050;background-color:#1e0010">.Site.Pages</span> }<span style="color:#960050;background-color:#1e0010">}</span>
{<span style="color:#960050;background-color:#1e0010">{-</span> <span style="color:#960050;background-color:#1e0010">if</span> <span style="color:#960050;background-color:#1e0010">ne</span> <span style="color:#960050;background-color:#1e0010">$page.Type</span> <span style="color:#f92672">&#';json&#';</span> <span style="color:#960050;background-color:#1e0010">-</span>}<span style="color:#960050;background-color:#1e0010">}</span>
{<span style="color:#960050;background-color:#1e0010">{-</span> <span style="color:#960050;background-color:#1e0010">if</span> <span style="color:#960050;background-color:#1e0010">and</span> <span style="color:#960050;background-color:#1e0010">$index</span> <span style="color:#960050;background-color:#1e0010">(gt</span> <span style="color:#960050;background-color:#1e0010">$index</span> <span style="color:#960050;background-color:#1e0010">0)</span> <span style="color:#960050;background-color:#1e0010">-</span>}<span style="color:#960050;background-color:#1e0010">}</span>,{<span style="color:#960050;background-color:#1e0010">{-</span> <span style="color:#960050;background-color:#1e0010">end</span> }<span style="color:#960050;background-color:#1e0010">}</span>
{
	<span style="color:#f92672">&#';link&#';</span>: <span style="color:#e6db74">&#';{{ $page.Permalink }}&#';</span>,
	<span style="color:#f92672">&#';judul&#';</span>: <span style="color:#e6db74">&#';{{ htmlEscape $page.Title}}&#';</span>,
	<span style="color:#f92672">&#';tags&#';</span>: <span style="color:#e6db74">&#';{{ range $tindex, $tag := $page.Params.tags }}{{ if $tindex }} &gt;{{ end }}{{ $tag| htmlEscape }}&gt;{{ end }}&#';</span>,
	<span style="color:#f92672">&#';description&#';</span>: <span style="color:#e6db74">&#';{{ htmlEscape .Description}}&#';</span>,
}
{<span style="color:#960050;background-color:#1e0010">{-</span> <span style="color:#960050;background-color:#1e0010">end</span> <span style="color:#960050;background-color:#1e0010">-</span>}<span style="color:#960050;background-color:#1e0010">}</span>
{<span style="color:#960050;background-color:#1e0010">{-</span> <span style="color:#960050;background-color:#1e0010">end</span> <span style="color:#960050;background-color:#1e0010">-</span>}<span style="color:#960050;background-color:#1e0010">}</span>]
</code></pre></div><h3 id="upload-ke-github">Upload ke Github</h3>
<h3 id="upload-ke-gitlab">Upload ke Gitlab</h3>
<h3 id="upload-ke-netlify">Upload ke Netlify</h3>

`
