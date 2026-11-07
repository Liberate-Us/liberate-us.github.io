const strings = {
  pl: {
    navFeatures:"Funkcje",navScreens:"Wygląd",navAbout:"O projekcie",navDownload:"Pobierz",
    eyebrow:"OTWARTY KOD · ANDROID",
    heroHeading:"Twoje wiadomości.<br><em>Twoje zasady.</em>",
    heroLead:"Liberate Us to niezależna aplikacja na Androida do obsługi wiadomości w systemie Librus Synergia. Prościej, przejrzyściej i po swojemu.",
    downloadApk:"Pobierz APK",sourceCode:"Kod źródłowy",android:"Android 8.0+",free:"Bezpłatnie · MIT",
    mockInbox:"Wiadomości",mockReceived:"Odebrane",mockSent:"Wysłane",mockDrafts:"Robocze",offlineNote:"Wiadomości również offline",mockLabel:"Ilustracja poglądowa interfejsu",
    featuresKicker:"CO POTRAFI",featuresHeading:"Wiadomości, bez zbędnych komplikacji.",
    featuresLead:"Wszystko, czego potrzebujesz do codziennej komunikacji, w jednej niezależnej aplikacji.",
    f1Title:"Odebrane i wysłane",f1Desc:"Przeglądaj korespondencję i wracaj do wcześniejszych wiadomości bez zbędnego przeklikiwania.",
    f2Title:"Odpowiedzi i nowe wiadomości",f2Desc:"Pisz do wybranych odbiorców i odpowiadaj na otrzymane wiadomości.",
    f3Title:"Wersje robocze",f3Desc:"Zapisz niedokończoną wiadomość i wróć do niej później.",
    f4Title:"Powiadomienia",f4Desc:"Okresowe sprawdzanie nowych wiadomości i powiadomienia na Androidzie.",
    f5Title:"Dostęp offline",f5Desc:"Odczytuj zapisane lokalnie wiadomości również bez połączenia z internetem.",
    f6Title:"Otwarty kod",f6Desc:"Projekt na licencji MIT. Kod i historia zmian są publicznie dostępne na GitHubie.",
    screensKicker:"ZOBACZ APLIKACJĘ",screensHeading:"Zaprojektowana dla codziennej komunikacji.",screensLead:"Tutaj pojawią się rzeczywiste zrzuty ekranu aplikacji. Na razie pokazujemy miejsca przygotowane pod galerię.",previewLabel:"MIEJSCE NA ZRZUT EKRANU",screenInbox:"Odebrane",screenReading:"Czytanie wiadomości",screenComposer:"Nowa wiadomość",
    aboutKicker:"ZA KULISAMI",aboutHeading:"Niezależny projekt.<br><span>Otwarty rozwój.</span>",
    aboutP1:"Liberate Us powstaje jako niezależna alternatywa dla obsługi wiadomości w Librus Synergia. To projekt rozwijany publicznie — nowe funkcje, poprawki i kolejne wydania pojawiają się na GitHubie.",
    aboutP2:"Aplikacja została stworzona metodą vibe codingu, ze znacznym wykorzystaniem narzędzi AI. Jest udostępniana bez gwarancji, w stanie „as is”. Korzystasz z niej na własne ryzyko.",
    viewRepository:"Zobacz repozytorium",
    downloadKicker:"GOTOWY NA START?",downloadHeading:"Zacznij korzystać z Liberate Us.",
    downloadLead:"Pobierz oficjalny APK na Androida. Najnowsze wydania i sumy kontrolne znajdziesz na GitHubie.",
    allReleases:"Wszystkie wydania",
    installNote:"Instalacja pliku APK może wymagać zezwolenia Androidowi na instalowanie aplikacji z wybranego źródła.",
    reportIssue:"Zgłoś problem ↗",
    legal:"Liberate Us jest niezależnym projektem. Nazwy Librus i Synergia oraz związane z nimi znaki należą do odpowiednich właścicieli i zostały użyte wyłącznie informacyjnie. Projekt nie jest z nimi powiązany ani przez nich wspierany."
  },
  en: {
    navFeatures:"Features",navScreens:"Screens",navAbout:"About",navDownload:"Download",
    eyebrow:"OPEN SOURCE · ANDROID",
    heroHeading:"Your messages.<br><em>Your way.</em>",
    heroLead:"Liberate Us is an independent Android application for messaging in Librus Synergia. A simpler, clearer way to stay in touch.",
    downloadApk:"Download APK",sourceCode:"Source code",android:"Android 8.0+",free:"Free · MIT",
    mockInbox:"Messages",mockReceived:"Inbox",mockSent:"Sent",mockDrafts:"Drafts",offlineNote:"Messages available offline",mockLabel:"Illustrative interface concept",
    featuresKicker:"WHAT IT DOES",featuresHeading:"Messaging without unnecessary friction.",
    featuresLead:"Everything you need for everyday communication in one independent application.",
    f1Title:"Inbox and sent messages",f1Desc:"Browse conversations and return to previous messages with less effort.",
    f2Title:"Reply and compose",f2Desc:"Write to selected recipients and respond to incoming messages.",
    f3Title:"Drafts",f3Desc:"Save unfinished messages and return to them later.",
    f4Title:"Notifications",f4Desc:"Periodic checks for new messages and Android notifications.",
    f5Title:"Offline access",f5Desc:"Read locally cached messages even without an internet connection.",
    f6Title:"Open source",f6Desc:"MIT-licensed project. Source code and development history are available on GitHub.",
    screensKicker:"SEE THE APPLICATION",screensHeading:"Built for everyday communication.",screensLead:"Actual application screenshots will appear here. For now, these are clearly marked gallery placeholders.",previewLabel:"SCREENSHOT PLACEHOLDER",screenInbox:"Inbox",screenReading:"Reading messages",screenComposer:"Compose message",
    aboutKicker:"BEHIND THE PROJECT",aboutHeading:"Independent project.<br><span>Open development.</span>",
    aboutP1:"Liberate Us is an independent alternative for handling messages in Librus Synergia. Development happens in public, with new features, fixes, and releases published on GitHub.",
    aboutP2:"The application was developed through vibe coding, with extensive use of AI tools. It is provided as is, without warranties. You use it at your own risk.",
    viewRepository:"View repository",
    downloadKicker:"READY TO START?",downloadHeading:"Try Liberate Us.",
    downloadLead:"Get the official Android APK. Find releases and checksums on GitHub.",
    allReleases:"All releases",
    installNote:"Installing an APK may require allowing Android to install applications from the selected source.",
    reportIssue:"Report an issue ↗",
    legal:"Liberate Us is an independent project. The names Librus and Synergia and related marks belong to their respective owners and are used for identification only. This project is not affiliated with or endorsed by them."
  }
};
const langButton = document.getElementById("lang");
let current = "pl";
function setLanguage(lang) {
  current = lang;
  document.documentElement.lang = lang;
  document.title = lang === "pl" ? "Liberate Us — wiadomości po Twojemu" : "Liberate Us — messaging your way";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = strings[lang][el.dataset.i18n];
    if (value === undefined) return;
    if (el.dataset.i18n === "heroHeading" || el.dataset.i18n === "aboutHeading") el.innerHTML = value;
    else el.textContent = value;
  });
  langButton.innerHTML = lang === "pl" ? 'EN <span>↗</span>' : 'PL <span>↗</span>';
  langButton.setAttribute("aria-label",lang === "pl" ? "Switch to English" : "Przełącz na polski");
}
langButton.addEventListener("click",() => setLanguage(current === "pl" ? "en" : "pl"));
