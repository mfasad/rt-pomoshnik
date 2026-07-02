// Yandex.Metrika — counter 110245443
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
)(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
ym(110245443,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});

// RT Pomoshnik: disclaimer notice and footer link
(function rtPomoshnikDisclaimer() {
  'use strict';

  var disclaimerPath = '/disclaimer.html';
  var body = document.body;
  if (!body) return;

  if (!document.getElementById('rtp-disclaimer-styles')) {
    var style = document.createElement('style');
    style.id = 'rtp-disclaimer-styles';
    style.textContent =
      '.rtp-disclaimer-notice{margin:0 0 24px;padding:16px 18px;border:1px solid rgba(111,143,127,.32);border-radius:14px;background:#f4f7f5;color:#385047;font-size:13px;line-height:1.65}' +
      '.rtp-disclaimer-notice p{margin:0}' +
      '.rtp-disclaimer-notice a{color:inherit;font-weight:700;text-decoration:underline;text-underline-offset:3px}' +
      '@media(max-width:720px){.rtp-disclaimer-notice{margin-bottom:20px;padding:14px 15px;font-size:12px}}';
    document.head.appendChild(style);
  }

  var footerGroups = document.querySelectorAll('.pc-footer-links');
  for (var i = 0; i < footerGroups.length; i++) {
    var projectGroup = footerGroups[i];
    if (!projectGroup.querySelector('a[href="/about.html"]')) continue;
    if (!projectGroup.querySelector('a[href="' + disclaimerPath + '"]')) {
      var footerLink = document.createElement('a');
      footerLink.href = disclaimerPath;
      footerLink.textContent = 'Отказ от ответственности';
      projectGroup.appendChild(footerLink);
    }
    break;
  }

  if (body.getAttribute('data-page-type') !== 'article') return;
  if (document.querySelector('.rtp-disclaimer-notice')) return;

  var articleHeader = document.querySelector('.pc-article > .pc-article-header');
  if (!articleHeader || !articleHeader.parentNode) return;

  var notice = document.createElement('aside');
  notice.className = 'rtp-disclaimer-notice';
  notice.setAttribute('aria-label', 'Важная информация');

  var noticeText = document.createElement('p');
  noticeText.appendChild(document.createTextNode(
    'РТ Помощник — независимый справочный проект, не являющийся официальным сайтом Ростелекома. Инструкции и условия услуг могут меняться и зависеть от региона, договора и модели оборудования. Перед оплатой, подключением услуг или изменением настроек проверьте сведения в личном кабинете и официальных каналах оператора. '
  ));
  var detailsLink = document.createElement('a');
  detailsLink.href = disclaimerPath;
  detailsLink.textContent = 'Подробнее';
  noticeText.appendChild(detailsLink);
  notice.appendChild(noticeText);

  articleHeader.parentNode.insertBefore(notice, articleHeader.nextSibling);
})();

// BEGIN GENERATED AD: VideoRoll
// VideoRoll — Под текстом статьи, перед похожими
(function(){
    if (!document.body) return;
    var pageType = document.body.getAttribute('data-page-type');
    if (pageType && pageType !== 'article') return;
    if (!pageType && /(^|\s)(home|category|archive)(\s|$)/.test(document.body.className)) return;
    var target = document.querySelector(".pc-article, article.pc-article, .article-body, .pb-article-body, main article, article");
    if (!target) return;
    if (document.getElementById("vid_vpaut_div")) return;

    // Ad container
    var wrap = document.createElement('div');
    wrap.style.cssText = 'margin:20px 0;text-align:center';
    wrap.innerHTML = "<div id=\"vid_vpaut_div\" style=\"display:inline-block;width:600px;height:320px\" vid_vpaut_pl=\"47986\"></div>";
    var related = target.querySelector('.pc-related, .related-articles, .related-posts, .article-related, [data-related]');
    if (related && related.parentNode) {
        related.parentNode.insertBefore(wrap, related);
    } else {
        target.appendChild(wrap);
    }

    // External script
    var scriptSrc = "https://videoroll.net/js/vid_vpaut_script.js";
    if (!document.querySelector('script[src="' + scriptSrc + '"]')) {
        var s = document.createElement('script');
        s.src = scriptSrc;
        s.async = true;
        document.body.appendChild(s);
    }
})();
// END GENERATED AD: VideoRoll
