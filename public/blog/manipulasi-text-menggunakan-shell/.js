const content = `
<p>disini saya akan menjelaskan bagaiamnaa cara mengatasi saat kita mengimport content dari blogger namun masih menggunakan html.</p>
<pre tabindex="0"><code>sed -i '2s/^/ authors=[&quot;muryp&quot;] \n/' *.md
for file in *.md; do
  echo '{{&lt; /html &gt;}}' &gt;&gt; &quot;$file&quot;
done
</code></pre><p>Ket :</p>
<ul>
<li>1s : barii</li>
</ul>

`
