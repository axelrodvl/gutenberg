Обзор IBM App Connect Enterprise

##### Глоссарий

Далее будут использованы следующие сокращения:
- ACE, также "брокер" - IBM App Connect Enterprise
- MQ - IBM MQ (ранее IBM WebSphere MQ)
- SOA - Service-Oriented Architecture, сервис-ориентированная архитектура
- ESB - Enterprise Service Bus, сервисная шина предприятия


---

##### Что такое IBM App Connect Enterprise

IBM App Connect Enterprise - платформа для построения интеграционной шины предрпиятия (Enterprise Service Bus, ESB).

Предоставляет набор каналов для взаимодействия между сервисами в архитектуре SOA (Service-Oriented Architecture).

---

##### История версий

Наименование продукта:
- IBM WebSphere Message Broker (до 9 версии)
- IBM Integration Bus (до 11 версии)
- IBM App Connect Enterprise (11 версия и далее)

IBM App Connect Enterprise представляет собой текущую версию платформы интеграции приложений и объединяет возможности IBM Integration Bus и IBM App Connect. 

IBM App Connect Enterprise V11 является официальным преемником IBM Integration Bus V10, который в свою очередь является преемником IBM WebSphere Message Broker.

---

##### SOA и ESB

- SOA - подход к разработке больших информационных систем. 
Предполагает построение системы из множества слабо связанных, самостоятельных компонентов, предоставляющих свой функционал по стандартизированным интерфейсам и протоколам.
- ESB - способ обеспечения стандартизированного взаимодействия между компонентами в SOA.
Предназначен для построения сервис-ориентированной архитектуры системы с использование существующих (legacy) компонентов. Представляет собой единый транспортный узел (единую точку входа) для взаимодействия разнородных компонентов, обеспечивающий стандартизацию интерфейсов и протоколов. При этом сами компоненты освобождаются от обязанности следовать требованиям SOA касательно стандартизации интерфейсов, задача преобразования оных ложится на ESB. 

---

##### Зачем это все?
Представим, что один крупный банк использует АБС Misys Equation, работающую на серверах IBM&nbsp;System&nbsp;i&nbsp;(AS/400) под ОС&nbsp;i5/OS&nbsp;(OS/400), позволяющую обрабатывать терабайты данных и обладающую необходимыми надежностью и функционалом в таком критичном деле, как учет и движение денег. 

Банк открывает офис с пуфиками, раскрашивает стены супергероями из Marvel и DC, нанимает команду молодых людей с макбуками и ставит задачу написать красивое iOS приложение на Swift.

Далее происходит следующий диалог между дредастым iOS разработчиком и бородатым архитектором:
- Я пишу экран отображения счетов, нужны данные. Как будем взаимодействовать? Ваш бэк по Protobuf вернет данные? Или JSON'ами через REST общаемся? Swagger есть?
- К бэку можно обращаться по TCP/IP через 5250&nbsp;telnet передачей блоков текста.

А дальше бородатый архитектор показывает это:

![AS/400](article/ibm-app-connect-enterprise/as400.jpg)

К тому же, брать данные из АБС с помощью фактической эмуляции работы живого человека и ввода данных с клавиатуры в поля зеленого экрана на эмуляции IBM&nbsp;5250 совместимого терминала предстоит также разработчикам клиента на Android, веб-версии для физических и юридических лиц и еще парочке-другой команд.

А еще у банка есть не только АБС...

На сцену врывается ESB и встает (живым) щитом между 128-битной сверхзащищенной операционной системой 1988 года и миром High&nbsp;DPI экранов и счастливых разработчиков десктоп-чатов на Electron, хвастающихся снижением потребления ОЗУ их чатиком с 1680 Мб до 710 Мб.

---

##### SOA и микросервисная архитектура

Основная статья: [Микросервисы, SOA и API: друзья или враги?](https://www.ibm.com/developerworks/ru/library/1601_clark-trs/index.html)

"Стандартизированные интерфейсы и протоколы, слабая связность, распределенные компоненты" - концепции SOA и микросервисов очень схожи и их различие зависит от контекста.

*Микросервисы - это одна из возможных архитектур построения отдельного компонента информационной системы, в то время как SOA связывает разнородные компоненты в одну информационную систему.*

Область охвата SOA — это это все предприятие, где происходит взаимодействие между приложениями. SOA предоставляет сервисы для приложений посредством стандартизированных интерфейсов. Архитектура микросервисов ориентирована на структуру и компоненты отдельного приложения.

---

##### Основные функции и возможности ACE

Основная статья: [IBM App Connect Enterprise technical overview](https://www.ibm.com/support/knowledgecenter/en/SSTTDS_11.0.0/com.ibm.etools.mft.doc/ab20551_.htm)

IBM App Connect Enterprise:
- Преднзначен для предоставления каналов взаимодействия различных систем (интеграционных потоков).
- Обеспечивает передачу информации между инициатором и получателями в формате сообщений (Message Assembly) с помощью потоков (Message Flow).
- Обеспечивает маршрутизацию и трансформацию сообщений.
- Обеспечивает транзакционность и обработку ошибок.
- Предоставляет готовые коннекторы для наиболее популярных протоколов передачи данных (JMS, MQTT, HTTP, REST, SOAP, File) и программных продуктов (IBM&nbsp;MQ, Kafka, SAP, Siebel, PeopleSoft, Salesforce).
- Поддерживает масштабирование.
- Поддерживает установку локально (Windows, Linux, AIX), в частном облаке (Kubernetes) или в публичном облаке (IBM Cloud).

---

##### Приложения и потоки в ACE
- Единица установки в ACE - приложение (Application), содержащее один или более потоков (Flows), а также ресурсы (ESQL код, Java библиотеки, XSLT файлы и прочее). 
- Контейнер для одного или нескольких приложений - BAR файл.
- Потоки разрабатываются в графическом виде и представлены как набор узлов (Nodes), соединенных друг с другом.
- Каждый узел имеет точку входа и одну или несколько точек выхода.
- Каждый узел имеет набор настроек (Properties) и страницу в документации с полным описанием всех возможностей.
- Потоки можно преобразовывать в подпотоки (Subflow) для эффективного переиспользования.
- Настройки узлов можно выносить на уровень потока для указания, что требуется настраивать в потоке при установке. Тем не менее, любую настройку собранного потока можно изменить.
- Потоки сохраняются в формате XML, но из-за особенностей связывания элементов, разработка без использования графического редактора сильно затруднена.
- Потоки в runtime не хранят состояние, но сохранение состояния возможно с использованием Global Cache, Singleton (Java) и баз данных.
- Сообщения в потоке представленнs в виде дерева, при этом тело сообщения может быть представленно в виде массива байт или дерева после парсинга.
- Поддерживаются высокопроизводительные парсеры для XML, JSON, DFDL, MIME и прочих форматов.

---

##### ACE и IBM MQ
- Основным транспортом для потоков являются очереди в IBM MQ.
- IBM MQ был включен в состав IBM Integration Bus 9 и ранее, но начиная с 10 версии отделен.
- Некоторые узлы (например, TimeoutNotification) требуют наличия IBM&nbsp;MQ для работы.
- IBM MQ может быть установлен вместе с ACE, либо на удаленной машине.
- При локальной установке ACE будет взаимодействовать с MQ напрямую через его API, при удаленной установке - по TCP/IP.

---

##### Инструменты для работы с ACE и MQ
- Приложения для ACE разрабатываются в IBM App Connect Enterprise Toolkit.
- Запуск, остановка и настройка ACE, а также сборка, установка и настройка приложений осуществляется с помощью консольного клиента MQSI (от MQSeries Integrator), устанавливаемого вместе с ACE.
- Запуск, остановка и настройка MQ осуществляется с помощью консольного клиента MQSC, устанавливаемого вместе с MQ.
- Взаимодействие с ACE возможно осуществлять программно с помощью IBM Integration API (также именуемого Configuration Manager Proxy или CMP).
- Взаимодействие с MQ возможно осуществлять программно с помощью WebSphere MQ API (также именуемого MQ Interface или MQI).
- ACE и MQ предоставляют веб-интерфейсы и REST API для управления.
- Для работы с очередями в IBM&nbsp;MQ можно использовать графический клиент IBM&nbsp;MQ&nbsp;Explorer, а также rfhutil.

---

##### Архитектура ACE

- Integration Server - сервер интеграции (IntegrationServer), ранее DataFlowEngine, предоставляет изолированное окружение для запуска потоков (runtime). Каждый сервер интеграции запускается отдельным процессом в выделенном адресном пространстве. Предназначены для запуска в контейнере или для нужд разработки.
- Integration Node - узел интеграции, служит для объединения отдельных серверов интеграции с общими настройками. Предназначен для установки на физической или виртуальной машине (on-premise).

![Architecture](article/ibm-app-connect-enterprise/arch.gif)

---

##### ACE - Integration Server

Основные статьи:
- [Execution and threading models in a message flow](https://www.ibm.com/support/knowledgecenter/SSTTDS_11.0.0/com.ibm.etools.mft.doc/ac01541_.htm)
- [Getting the Most out of IIB and App Connect Enterprise (ACE)](https://www.mqtechconference.com/sessions_v2018/MQTC_2018_ACE_Getting_The_Most_final.pdf)

Единственный (при использовании контейнера без IBM MQ) процесс, необходимый для запуска потоков - IntegrationServer, внутри которого также запускается экземпляр JVM. Процесс предполагает управление жизненным циклом с помощью инструментария ОС.

При инициализации IntegrationServer, в окружение загружаются требуемые Loadable&nbsp;Implementation&nbsp;Library&nbsp;(LIL) и Plug-in&nbsp;Archive&nbsp;(PAR).
IntegrationServer запускается и стартует выделенный конфигурационный поток.

Обработка сообщения внутри потока концептуально схожа с продурным программированием. Каждый узел потока исполняется как вызов соответствующей функции. Каждое сообщение, проходящее через поток (Message Flow), выполняется в отдельном единственном потоке (Thread). Message Flow являются потокобезопасным, а значит масштабирование потока может осуществляться в пределах доступных ресурсов без дополнительных модификаций. Не стоит забывать, что это не касается дополнительной логики, так как JVM будет хранить явно определенное состояние (например, при использовании Singleton).

Стандартный параметр для количества экземпляров потока - Additional instances.

---

##### Системные процессы ACE

Просмотра данных по утилизации ресурсов на Linux:
```
##### Processes:
pstree -c -u -l -a -p -S -s 1049
##### Threads:
ps -e -T | grep Inte
ps -eLf | grep Inte | grep -v grep | awk '{print $4}'
##### Stack trace:
strace -o foo -ff -p 1049
```

---

##### ACE - Global Cache

Потоки в ACE не хранят состояние (после завершения).

Основным средством для хранения данных между исполнениями в потоках ACE является Global Cache - in-memory key-value БД.
Global Cache не является персистентным, после перезагрузки его потребуется инициализировать заново. Все значения имеют срок жизни и удаляются по его истечению.
Global Cache не стоит использовать как точку синхронизации, а также для корреляции, так как он станет бутылочным горлышком (конкурентный доступ).
Для целей корреляции стандартным подходом является использование очередей.

Global Cache может быть как встроенным (embedded) в брокер, так и установленным отдельно (WebSphere eXtreme Scale grid).

---

##### IBM MQ

Высокопроизводительный MOM (Message-Oriented Middleware), предназначенный для передачи любых видов сообщений с гарантией однократной доставки.

IBM MQ поддерживает следующие виды обмена сообщениями:
- Queuing - сообщения помещаются в очереди
- Point-to-point - форма queuing, где сообщения доступны для получения строго одним получателем
- Publish/subscribe - публкация сообщений для подписчиков на определенную тему (topic)
- Multicast - форма publish/subscribe для большого числа подписчиков
- File transfer - передача файлов как сообщений
- Telemetry - передача телеметрии через легковесный протокол IBM&nbsp;MQTT&nbsp;(MQ&nbsp;Telemetry&nbsp;Transport)

Подключение клиентов к IBM&nbsp;MQ осуществляется с помощью создаваемых каналов MQI Client Channel типа SVRCONN (например, существующий по умолчанию SYSTEM.DEF.SVRCONN).

Для подключения к каналу на стороне IBM&nbsp;MQ запускается выделенный процесс (Listener), слушающий подключения по определенному порту (например, 1414 по умолчанию).
