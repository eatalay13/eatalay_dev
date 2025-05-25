"use client";

export default function ContactMap() {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
      {" "}
      <div className="aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3055.5!2d42.16680!3d38.48389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDI5JzAyLjAiTiA0MsKwMTAnMDAuNSJF!5e0!3m2!1str!2str!4v1732532000000!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Emrah Atalay"
        ></iframe>
      </div>
    </div>
  );
}
