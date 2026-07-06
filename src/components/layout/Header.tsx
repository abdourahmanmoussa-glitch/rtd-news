import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Share2, MessageCircle, Globe, AtSign, Radio } from 'lucide-react';
import { RtdWordmark } from '@/components/ui/Logo';
import { navGroups, topLevelNav, mediaNav } from '@/data/navigation';
import { cn } from '@/lib/utils';

const languages = ['FR', 'السومالية', 'العربية', 'Afar'];

export function Header() {
  const navigate = useNavigate();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [lang, setLang] = useState('FR');

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate(searchQuery.trim() ? `/recherche?q=${encodeURIComponent(searchQuery.trim())}` : '/recherche');
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-line">
      {/* Top bar */}
      <div className="hidden lg:flex items-center justify-between px-6 xl:px-10 h-9 text-xs text-ink-500 border-b border-line/70">
        <div className="flex items-center gap-4">
          <span>Djibouti, {new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())}</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 text-ink-500">
            <a href="#" aria-label="Facebook" className="hover:text-marine-800 transition-colors"><Globe className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-marine-800 transition-colors"><AtSign className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Youtube" className="hover:text-marine-800 transition-colors"><MessageCircle className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-marine-800 transition-colors"><Share2 className="w-3.5 h-3.5" /></a>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 font-medium hover:text-marine-800 transition-colors">
              {lang} <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block">
              <div className="bg-white border border-line rounded-lg shadow-lg py-1 min-w-[140px]">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="block w-full text-left px-3 py-1.5 hover:bg-sand-100 text-ink-700"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 xl:px-10 h-16 lg:h-[4.5rem]">
        <Link to="/" className="shrink-0">
          <RtdWordmark />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {topLevelNav.map((item) => (
            <NavLink
              key={item.slug}
              to={item.slug ? `/${item.slug}` : '/'}
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive ? 'text-marine-900' : 'text-ink-700 hover:text-marine-900 hover:bg-sand-100'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  openGroup === group.label ? 'text-marine-900 bg-sand-100' : 'text-ink-700 hover:text-marine-900 hover:bg-sand-100'
                )}
              >
                {group.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openGroup === group.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                  <div className="bg-white border border-line rounded-xl shadow-xl py-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/rubrique/${item.slug}`}
                        className="block px-4 py-2 text-sm text-ink-700 hover:text-marine-900 hover:bg-sand-100 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {mediaNav.map((item) => (
            <NavLink
              key={item.slug}
              to={`/${item.slug}`}
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive ? 'text-marine-900' : 'text-ink-700 hover:text-marine-900 hover:bg-sand-100'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            aria-label="Rechercher"
            onClick={() => setSearchOpen((s) => !s)}
            className="p-2 rounded-lg text-ink-700 hover:text-marine-900 hover:bg-sand-100 transition-colors"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>
          <Link
            to="/direct"
            className="hidden sm:inline-flex items-center gap-2 bg-signal-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-signal-500 transition-colors"
          >
            <Radio className="w-3.5 h-3.5" />
            RTD en direct
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-sand-100"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-line bg-sand-100/60 px-4 sm:px-6 xl:px-10 py-4">
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-3 bg-white rounded-full border border-line px-4 py-2.5">
            <Search className="w-4 h-4 text-ink-500 shrink-0" />
            <input
              autoFocus
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un article, une vidéo, une émission…"
              className="flex-1 bg-transparent outline-none text-sm text-ink-900 placeholder:text-ink-500"
            />
            <button type="submit" className="text-sm font-semibold text-marine-800 shrink-0">
              Rechercher
            </button>
          </form>
        </div>
      )}

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line max-h-[75vh] overflow-y-auto">
          <nav className="px-4 py-3 flex flex-col">
            {topLevelNav.map((item) => (
              <Link
                key={item.slug}
                to={item.slug ? `/${item.slug}` : '/'}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-medium text-ink-800 border-b border-line/60"
              >
                {item.label}
              </Link>
            ))}
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-line/60">
                <p className="pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">{group.label}</p>
                <div className="flex flex-col pb-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/rubrique/${item.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-ink-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {mediaNav.map((item) => (
              <Link
                key={item.slug}
                to={`/${item.slug}`}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-medium text-ink-800 border-b border-line/60"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/direct"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-signal-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full"
            >
              <Radio className="w-3.5 h-3.5" />
              RTD en direct
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
