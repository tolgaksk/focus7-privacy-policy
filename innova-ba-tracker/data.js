const APP_DATA = {
  telefon: [
    { id: 't1', text: 'Sakin ve profesyonel karşıla, isminizi ve başvurduğunuz pozisyonu teyit edin' },
    { id: 't2', text: 'Görüşme için uygun zaman sorun; müsait değilseniz geri arama saati belirleyin' },
    { id: 't3', text: 'Maaş beklentisi sorulursa: piyasa araştırması yapılmış aralık verin, net rakamdan kaçının' },
    { id: 't4', text: 'Ankara ofis / hibrit çalışma konusunu netleştirin' },
    { id: 't5', text: 'Görüşme tarihini takvime ekleyin, hatırlatıcı kurun' },
    { id: 't6', text: 'İK\'ya teşekkür edin ve iletişim bilgilerini not alın' },
  ],

  'ik-oncesi': [
    { id: 'ik1', text: 'İnnova hakkında araştırma: Türk Telekom Grubu, telekom/finans/kamu projeleri, 1600+ çalışan' },
    { id: 'ik2', text: '"Neden İnnova?" sorusuna 3 maddelik cevap hazırlayın' },
    { id: 'ik3', text: 'CV\'deki her proje için 1 dakikalık özet (proje adı, rolünüz, sonuç) hazırlayın' },
    { id: 'ik4', text: 'Kıdemli seviyede liderlik örnekleri düşünün: mentorluk, çatışma çözümü, paydaş yönetimi' },
    { id: 'ik5', text: 'İngilizce kendinizi tanıtma pratiği yapın (2 dakika)' },
    { id: 'ik6', text: 'Soracağınız 3 soru hazırlayın: ekip yapısı, proje türleri, kariyer yolu' },
  ],

  'teknik-hazirlik': [
    { id: 'th1', text: 'SRS / Use Case / UML örnek dokümanlarınızı hazır bulundurun' },
    { id: 'th2', text: 'Gereksinim toplama sürecinizi adım adım anlatabilir olun' },
    { id: 'th3', text: 'Kapsam kayması (scope creep) yönetimi örneği hazırlayın' },
    { id: 'th4', text: 'Agile/Scrum: sprint, backlog, user story, definition of done kavramlarını gözden geçirin' },
    { id: 'th5', text: 'BPMN süreç diyagramı çizme pratiği yapın (draw.io veya Bizagi)' },
    { id: 'th6', text: 'Veri modelleme: ER diyagramı, temel SQL sorguları' },
    { id: 'th7', text: 'REST API / entegrasyon temel kavramları' },
    { id: 'th8', text: 'Test senaryosu yazma ve UAT süreci deneyiminizi özetleyin' },
  ],

  'mulakat-gunu': [
    { id: 'mg1', text: 'Kıyafet: kurumsal ama rahat, kamera görüşmesi için üst kısım düzenli' },
    { id: 'mg2', text: '15 dakika erken bağlanın, internet ve mikrofon testi yapın' },
    { id: 'mg3', text: 'Su, not defteri ve kalem hazır olsun' },
    { id: 'mg4', text: 'Örnek dokümanlarınız açık sekmede beklesin (paylaşım istenirse)' },
    { id: 'mg5', text: 'Her cevapta STAR yöntemini kullanın' },
    { id: 'mg6', text: 'Bilmediğiniz konuda dürüst olun, öğrenme isteğinizi vurgulayın' },
    { id: 'mg7', text: 'Sonunda teşekkür edin ve sonraki adımı sorun' },
  ],

  sabah: [
    { id: 's1', text: 'E-posta ve Jira/Confluence backlog kontrolü' },
    { id: 's2', text: 'Günlük stand-up toplantısına katılım (dün / bugün / engel)' },
    { id: 's3', text: 'Öncelikli görev listesini gözden geçir' },
    { id: 's4', text: 'Bugünkü toplantıları ve hazırlık notlarını kontrol et' },
  ],

  ogle: [
    { id: 'o1', text: 'Paydaş görüşmeleri / gereksinim toplama oturumları' },
    { id: 'o2', text: 'Analiz dokümanı güncelleme (SRS, Use Case, BPMN)' },
    { id: 'o3', text: 'Geliştirme ekibiyle backlog refinement / soru-cevap' },
    { id: 'o4', text: 'Gereksinim değişiklik taleplerini değerlendir ve kaydet' },
  ],

  'ogleden-sonra': [
    { id: 'os1', text: 'Test ekibiyle UAT senaryoları ve kabul kriterleri üzerinde çalış' },
    { id: 'os2', text: 'Proje yöneticisi ile kapsam ve ilerleme senkronizasyonu' },
    { id: 'os3', text: 'Dokümantasyon: Confluence sayfalarını güncelle' },
    { id: 'os4', text: 'Açık aksiyon maddelerini takip et ve kapat' },
  ],

  'gun-sonu': [
    { id: 'gs1', text: 'Yarınki toplantılar için hazırlık notu yaz' },
    { id: 'gs2', text: 'Jira\'da görev durumlarını güncelle' },
    { id: 'gs3', text: 'Günlük öğrenme notu: bugün ne öğrendim?' },
    { id: 'gs4', text: 'Açık riskleri ve engelleri proje yöneticisine ilet' },
  ],

  starScenarios: [
    { id: 'star1', title: 'Çelişkili paydaş talepleri', placeholder: 'Örn: İki departman farklı öncelik istedi. Önce ortak toplantı düzenledim...' },
    { id: 'star2', title: 'Kapsam dışı talep yönetimi', placeholder: 'Örn: Müşteri sözleşme dışı özellik istedi. Etki analizi yaptım...' },
    { id: 'star3', title: 'Gereksinim toplama süreci', placeholder: 'Örn: 50+ paydaşlı projede workshop serisi düzenledim...' },
    { id: 'star4', title: 'Geliştirme ekibiyle çatışma çözümü', placeholder: 'Örn: Belirsiz gereksinim nedeniyle gecikme yaşandı. Detaylandırma oturumu...' },
    { id: 'star5', title: 'Büyük proje başarısı', placeholder: 'Örn: X modülünü zamanında ve bütçe dahilinde teslim ettik...' },
    { id: 'star6', title: 'Mentorluk / ekip geliştirme', placeholder: 'Örn: Junior analiste UML ve SRS eğitimi verdim...' },
  ],

  interviewQuestions: [
    {
      q: 'Gereksinim toplama sürecinizi anlatır mısınız?',
      a: 'Paydaş analizi → Görüşme/workshop planı → Gereksinim kaydı → Önceliklendirme (MoSCoW) → Dokümantasyon → Onay → Geliştirmeye aktarım',
    },
    {
      q: 'Use Case ile User Story arasındaki fark nedir?',
      a: 'Use Case: detaylı akış, aktörler, ön/son koşullar, alternatif akışlar (waterfall/kurumsal). User Story: kısa, kullanıcı odaklı, kabul kriterleri (Agile). İnnova\'da ikisi de kullanılır.',
    },
    {
      q: 'Kapsam kaymasını (scope creep) nasıl yönetirsiniz?',
      a: 'Değişiklik talebini kaydet → Etki analizi (zaman, maliyet, risk) → Paydaş onayı → Sözleşme/CR süreci → Dokümantasyon güncelle',
    },
    {
      q: 'SRS dokümanında hangi bölümler olmalı?',
      a: 'Giriş, kapsam, tanımlar, fonksiyonel gereksinimler, fonksiyonel olmayan gereksinimler, veri modeli, arayüz gereksinimleri, kısıtlar, kabul kriterleri',
    },
    {
      q: 'Test ekibiyle nasıl çalışırsınız?',
      a: 'Kabul kriterlerini birlikte tanımlarım, UAT senaryolarına girdi sağlarım, hata raporlarında gereksinim netliğini kontrol ederim, regresyon etkisini değerlendiririm',
    },
    {
      q: 'Neden İnnova?',
      a: 'Büyük ölçekli kurumsal projeler, telekom/finans sektör deneyimi, Türk Telekom ekosistemi, kariyer gelişim fırsatları (kendi cevabınızı yazın)',
    },
  ],

  weekFocus: [
    { day: 'Pazartesi', focus: 'Haftalık planlama, sprint hedefleri, paydaş toplantıları' },
    { day: 'Salı', focus: 'Gereksinim analizi ve dokümantasyon derin çalışma' },
    { day: 'Çarşamba', focus: 'Geliştirme ekibi ile backlog refinement' },
    { day: 'Perşembe', focus: 'Test koordinasyonu, UAT hazırlıkları' },
    { day: 'Cuma', focus: 'Haftalık özet, dokümantasyon kapanışı, öğrenme zamanı' },
  ],

  skills: [
    {
      id: 'uml',
      name: 'UML Modelleme',
      priority: 'kritik',
      tools: ['Enterprise Architect', 'draw.io', 'Lucidchart', 'Visual Paradigm'],
      topics: ['Use Case', 'Sequence', 'Activity', 'Class Diagram'],
      resources: ['https://www.uml-diagrams.org/', 'BABOK v3 — Tasarım Tanımı'],
    },
    {
      id: 'bpmn',
      name: 'BPMN Süreç Modelleme',
      priority: 'kritik',
      tools: ['Bizagi Modeler', 'draw.io', 'Camunda', 'Visio'],
      topics: ['AS-IS / TO-BE süreç', 'Gateway', 'Pool & Lane', 'Event'],
      resources: ['https://www.bpmn.org/', 'Bizagi eğitim videoları'],
    },
    {
      id: 'srs',
      name: 'SRS / BRD Dokümantasyon',
      priority: 'kritik',
      tools: ['Confluence', 'MS Word', 'Notion'],
      topics: ['Fonksiyonel gereksinim', 'Kabul kriterleri', 'Traceability matrix'],
      resources: ['IEEE 830 standardı', 'BABOK — Gereksinim Analizi'],
    },
    {
      id: 'agile',
      name: 'Agile / Scrum',
      priority: 'kritik',
      tools: ['Jira', 'Azure DevOps', 'Confluence'],
      topics: ['Sprint planning', 'Backlog refinement', 'User Story', 'DoD'],
      resources: ['Scrum Guide', 'PSM I sertifikası'],
    },
    {
      id: 'sql',
      name: 'SQL & Veri Modelleme',
      priority: 'onemli',
      tools: ['DBeaver', 'pgAdmin', 'Oracle SQL Developer'],
      topics: ['SELECT/JOIN', 'ER diyagramı', 'Normalizasyon', 'Veri sözlüğü'],
      resources: ['SQLBolt', 'Mode Analytics SQL Tutorial'],
    },
    {
      id: 'api',
      name: 'API & Entegrasyon',
      priority: 'onemli',
      tools: ['Postman', 'Swagger/OpenAPI'],
      topics: ['REST', 'JSON', 'SOAP temelleri', 'API dokümantasyonu'],
      resources: ['Postman Learning Center', 'REST API Tutorial'],
    },
    {
      id: 'jira',
      name: 'Jira & Confluence',
      priority: 'onemli',
      tools: ['Jira', 'Confluence', 'Tempo'],
      topics: ['Epic/Story/Task hiyerarşisi', 'Workflow', 'Dashboard', 'Raporlama'],
      resources: ['Atlassian University (ücretsiz kurslar)'],
    },
    {
      id: 'uiux',
      name: 'UI/UX Temelleri',
      priority: 'onemli',
      tools: ['Figma', 'Balsamiq', 'Axure'],
      topics: ['Wireframe', 'Mockup', 'Kullanılabilirlik', 'Prototip'],
      resources: ['Figma Learn', 'Nielsen Norman Group makaleleri'],
    },
    {
      id: 'cbap',
      name: 'IIBA CBAP / CCBA',
      priority: 'ileri',
      tools: ['BABOK v3'],
      topics: ['6 bilgi alanı', '30 teknik', '50 yetkinlik'],
      resources: ['https://www.iiba.org/', 'IIBA Türkiye Chapter'],
    },
    {
      id: 'telekom',
      name: 'Telekom Sektör Bilgisi',
      priority: 'ileri',
      tools: [],
      topics: ['BSS/OSS', 'CRM', 'Faturalama', 'Abone yönetimi'],
      resources: ['İnnova proje dokümanları', 'TM Forum standartları'],
    },
    {
      id: 'english',
      name: 'İngilizce (İş)',
      priority: 'onemli',
      tools: ['Duolingo', 'BBC Learning English'],
      topics: ['Teknik sunum', 'E-posta yazımı', 'Toplantı İngilizcesi'],
      resources: ['Business English Pod', 'İnnova İngilizce testi pratiği'],
    },
    {
      id: 'ai',
      name: 'Yapay Zeka Destekli Analiz',
      priority: 'ileri',
      tools: ['ChatGPT', 'Copilot', 'Claude'],
      topics: ['Gereksinim taslağı', 'Süreç optimizasyonu', 'Doküman özetleme'],
      resources: ['Prompt engineering for BAs'],
    },
  ],

  resources: [
    { name: 'BABOK v3 (IIBA)', url: 'https://www.iiba.org/standards-and-resources/babok/', type: 'Kitap' },
    { name: 'Scrum Guide', url: 'https://scrumguides.org/', type: 'Doküman' },
    { name: 'draw.io (diagram)', url: 'https://app.diagrams.net/', type: 'Araç' },
    { name: 'Bizagi Modeler', url: 'https://www.bizagi.com/en/platform/modeler', type: 'Araç' },
    { name: 'Atlassian University', url: 'https://university.atlassian.com/', type: 'Eğitim' },
    { name: 'SQLBolt', url: 'https://sqlbolt.com/', type: 'Eğitim' },
    { name: 'Postman Learning', url: 'https://learning.postman.com/', type: 'Eğitim' },
    { name: 'IIBA Türkiye', url: 'https://www.iiba.org.tr/', type: 'Topluluk' },
    { name: 'İnnova Kariyer', url: 'https://www.innova.com.tr/is-ilanlari', type: 'Şirket' },
  ],
};
